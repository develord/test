<template>
  <div>
    <client-only>
      <el-form ref="form" label-width="120px">
        <el-form-item v-for="f in formObject.fields" :key="f.model" :label="f.label">
          <modalImageSelector v-if="f.type === 'image'" :file.sync="formModel[f.model]" />
          <el-input v-else-if="f.value" v-model="formModel[f.model]" :readonly="f.readonly" :placeholder="f.placeholder" />
          <el-select v-else-if="f.type.hasOwnProperty('select')" v-model="formModel[f.model]" remote :placeholder="f.placeholder">
            <template v-if="typeof f.type.select.options === 'object'">
              <el-option v-for="item in f.type.select.options" :key="item" :value="item" :label="item" />
            </template>
            <template v-if="typeof f.type.select.options === 'string'">
              <el-option v-for="item in data[f.type.select.options]" :key="item._id" :value="item._id" :label="item.h1 || item.name" />
            </template>
          </el-select>
          <editor
            v-else-if="f.type === 'content'"
            ref="editor"
            :content.sync="formModel[f.model]"
          />
          <el-input
            v-else
            v-model="formModel[f.model]"
            :type="f.type ? f.type : 'text'"
            :placeholder="f.placeholder ? f.placeholder : 'Input'"
            @change="updateGen($event, f.model)"
          />
        </el-form-item>
        <el-row>
          <el-button size="mini" @click="cancelForm">
            Cancel
          </el-button>
          <el-button size="mini" type="primary" @click="submitForm">
            Submit
          </el-button>
        </el-row>
      </el-form>
    </client-only>
  </div>
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
  methods: {
    updateGen (event, model) {
      for (const f in this.formObject.fields) {
        if (this.formObject.fields[f].value && (this.formObject.fields[f].value.from === model)) {
          const ink = this.$parent[this.formObject.fields[f].value.fn](this.formModel[this.formObject.fields[f].value.from])
          this.formModel[this.formObject.fields[f].model] = ink
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
