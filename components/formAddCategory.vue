<template>
  <el-card>
    <div slot="header" class="clearfix">
      <el-page-header content="Creation category form" @back="closeModale" />
    </div>
    <div>
      <el-form ref="form" label-width="120px">
        <el-form-item v-for="f in form.fields" :key="f.model" :label="f.label">
          <modalImageSelector v-if="f.type === 'image'" :file.sync="post[f.model]" />
          <el-input
            v-else
            v-model="post[f.model]"
            :type="f.type ? f.type : 'text'"
            :placeholder="f.placeholder ? f.placeholder : 'Input'"
          />
        </el-form-item>
      </el-form>
      <editor
        ref="editor"
        :content.sync="post.content"
      />

      <div class="bottom clearfix">
        <el-row>
          <el-button @click="closeModale">
            Cancel
          </el-button>
          <el-button type="primary" @click="addNewPost">
            Submit
          </el-button>
        </el-row>
      </div>
    </div>
  </el-card>
</template>
<script>
import editor from '~/components/editor'
const _ = require('lodash')

export default {
  components: {
    editor,
    modalImageSelector: () => import('~/components/modalImageSelector')
  },
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      form: require('./category/form.json')
    }
  },
  watch: {
    'post.h1' (newVal) {
      this.post.link = this.slugify(newVal)
    }
  },
  mounted () {
    const content = this.post.content
    if (content) {
      this.$refs.editor.setContent(content)
    }
  },
  methods: {
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
    closeModale () {
      this.$router.push({ name: 'ad-admin-category' })
    },
    addNewPost () {
      const category = _.cloneDeep(this.post)
      category.content = JSON.stringify(category.content)
      category.image_large = category.image_large._id
      category.image_small = category.image_small._id
      if (category._id) {
        this.$store.dispatch('updateCategory', category).then((res) => {
          this.$notify({
            title: 'Success',
            message: 'Adding Category',
            type: 'success'
          })
          this.closeModale()
        })
      } else {
        this.$store.dispatch('addNewCategory', category).then((res) => {
          this.$notify({
            title: 'Success',
            message: 'Adding Category',
            type: 'success'
          })
          this.closeModale()
        })
      }
    }
  }
}
</script>
