<template>
  <v-form v-if="formObject.fields" ref="form">
    <template v-for="f in formObject.fields">
      <v-col v-if="f.type === 'image'" :key="f.model" cols="12" sm="12">
        <modalImageSelector :file.sync="formModel[f.model]" />
      </v-col>
      <v-col v-else-if="f.value" :key="f.model" cols="12" sm="12">
        <v-text-field
          v-model="formModel[f.model]"
          :readonly="f.readonly"
          :label="f.placeholder ? f.placeholder : 'Input'"
          :placeholder="f.placeholder ? f.placeholder : 'Input'"
        />
      </v-col>
      <v-col v-else-if="f.type.hasOwnProperty('select')" :key="f.model" cols="12" sm="12">
        <v-select
          v-if="typeof f.type.select.options === 'object' "
          v-model="formModel[f.model]"
          :items="f.type.select.options"
          :multiple="f.multiple"
          attach
          chips
          :label="f.placeholder ? f.placeholder : 'Input'"
        />
        <v-select
          v-if="typeof f.type.select.options === 'string'"
          v-model="formModel[f.model]"
          item-text="name"
          :item-value="'_id'"
          :items="data[f.type.select.options]"
          :multiple="f.multiple"
          attach
          chips
          :label="f.placeholder ? f.placeholder : 'Input'"
        />
      </v-col>
      <v-col v-else-if="f.type === 'array'" :key="f.model" cols="12" sm="12">
        <v-combobox
          v-model="formModel[f.model]"
          :search-input.sync="search"
          hide-selected
          :label="f.placeholder"
          multiple
          persistent-hint
          small-chips
        >
          <template v-slot:no-data>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-combobox>
      </v-col>
      <v-col v-else-if="f.type === 'content'" :key="f.model" cols="12" sm="12">
        <editor
          ref="editor"
          :content.sync="formModel[f.model]"
        />
      </v-col>
      <v-col v-else-if="f.type === 'file'" :key="f.model" cols="12" sm="12">
        {{ formModel[f.model] }}
        <v-file-input
          ref="file"
          type="file"
          required
          @change="uploadFile($event, f.model)"
        />
      </v-col>
      <v-col v-else-if="f.type === 'date'" :key="f.model" cols="12" sm="12">
        <el-date-picker
          v-model="formModel[f.model]"
          type="year"
          :placeholder="f.placeholder ? f.placeholder : 'Input Date'"
        />
      </v-col>
      <v-col v-else-if="f.type === 'textarea'" :key="f.model" cols="12" sm="12">
        <v-textarea
          v-model="formModel[f.model]"
          :label="f.placeholder ? f.placeholder : 'Input'"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          :hint="f.placeholder ? f.placeholder : 'Input'"
        />
      </v-col>
      <v-col v-else :key="f.model" cols="12" sm="12">
        <v-text-field
          v-model="formModel[f.model]"
          :label="f.placeholder ? f.placeholder : 'Input'"
          :placeholder="f.placeholder ? f.placeholder : 'Input'"
          @change="updateGen($event, f.model)"
        />
      </v-col>
    </template>
    <v-btn
      color="error"
      class="mr-4"
      @click="cancelForm"
    >
      Cancel
    </v-btn>

    <v-btn
      color="primary"
      @click="submitForm"
    >
      Submit
    </v-btn>
  </v-form>
</template>
<script>
export default {
  layout: 'Back',
  middleware: 'auth',
  components: {
    modalImageSelector: () => import('~/components/modalImageSelector'),
    editor: () => import('~/components/editor')
  },
  props: {
    formObject: {
      type: Object,
      required: true
    },
    formModel: {
      type: Object,
      required: true
    },
    data: {
      type: [Object, Array],
      default: () => []
    }
  },
  data () {
    return {
      formAdapter: {},
      search: null
    }
  },
  watch: {
    formModel: {
      handler (newVal) {
        Object.keys(newVal).forEach((et) => {
          this.formAdapter[et] = Array.isArray(newVal[et]) ? newVal[et].map(el => el._id) : newVal[et]
        })
      }
    }
  },
  methods: {
    async uploadFile (e, model) {
      this.formModel[model] = e.name
      await this.$store.dispatch('uploadFile', e)
    },
    slugify (text) {
      const from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;'
      const to = 'aaaaaeeeeeiiiiooooouuuunc------'
      const newText = text.split('').map(
        (letter, i) => letter.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i)))
      return newText
        .toString() // Cast to string
        .toLowerCase() // Convert the string to lowercase letters
        .trim() // Remove whitespace from both sides of a string
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/&/g, '-y-') // Replace & with 'and'
        .replace(/[^\w\\-]+/g, '') // Remove all non-word chars
        .replace(/\\-\\-+/g, '-') // Replace multiple - with single -
    },
    updateGen (event, model) {
      for (const f in this.formObject.fields) {
        if ((this.formObject.fields[f].value && (this.formObject.fields[f].value.from === model)) || (this.formObject.fields[f].value && (this.formObject.fields[f].value.params === model))) {
          let str = ''
          if (this.formObject.fields[f].value.params) {
            if (this.formModel[this.formObject.fields[f].value.params] && this.formModel[this.formObject.fields[f].value.from]) {
              if (typeof this.formModel[this.formObject.fields[f].value.params] === 'object') {
                str = this[this.formObject.fields[f].value.fn](this.formModel[this.formObject.fields[f].value.params].name) + '/' + this[this.formObject.fields[f].value.fn](this.formModel[this.formObject.fields[f].value.from])
              } else {
                const paramVal = this.data[this.formObject.fields[f].value.params].find(el => el._id === this.formModel[this.formObject.fields[f].value.params])
                str = this[this.formObject.fields[f].value.fn](paramVal.name) + '/' + this[this.formObject.fields[f].value.fn](this.formModel[this.formObject.fields[f].value.from])
              }
            }
          } else {
            str = this[this.formObject.fields[f].value.fn](this.formModel[this.formObject.fields[f].value.from])
          }
          this.formModel[this.formObject.fields[f].model] = str
        }
      }
    },
    cancelForm () {
      this.$emit('cancelForm')
    },
    submitForm () {
      this.$emit('submitForm')
    }
  }
}
</script>
