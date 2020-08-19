<template>
  <el-card>
    <div slot="header" class="clearfix">
      <el-page-header content="Creation post form" @back="closeModale" />
    </div>
    <div>
      <el-form ref="form" label-width="120px">
        <el-form-item label="Title Post">
          <el-input v-model="post.title" />
        </el-form-item>
        <el-form-item label="H1 Post">
          <el-input v-model="post.h1" />
        </el-form-item>
        <el-form-item label="Link Post">
          <el-input v-model="post.link" />
        </el-form-item>
        <el-form-item label="Category Post">
          <el-select v-model="post.category" remote placeholder="please select your zone">
            <el-option v-for="item in listCategoy" :key="item._id" :value="item._id" :label="item.name" />
          </el-select>
        </el-form-item>
        <el-form-item label="Status Post">
          <el-select v-model="post.status" placeholder="please select your zone">
            <el-option v-for="item in listeStatus" :key="item._id" :value="item._id" :label="item.name" />
          </el-select>
        </el-form-item>
        <el-form-item label="Description Post">
          <el-input v-model="post.description" type="textarea" placeholder="Explain what is post tolk about" />
        </el-form-item>
        <el-form-item label="Cover Post img">
          <modalImageSelector :file.sync="post.image_large" />
        </el-form-item>
        <el-form-item label="Small Post img">
          <modalImageSelector :file.sync="post.image_small" />
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
import { categories, statuses } from '@/apollo/query'
import editor from '~/componants/editor'
const _ = require('lodash')

export default {
  components: {
    editor,
    modalImageSelector: () => import('~/componants/modalImageSelector')
  },
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      listCategoy: [],
      listeStatus: []
    }
  },
  watch: {
    categories (newVal) {
      this.listCategoy = newVal
    },
    statuses (newVal) {
      this.listeStatus = newVal
    },
    'post.h1' (newVal) {
      this.post.link = this.slugify(newVal)
    }
  },
  apollo: {
    categories: {
      query: categories
    },
    statuses: {
      query: statuses
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
      this.$router.push({ name: 'ad-admin-posts' })
    },
    addNewPost () {
      const post = _.cloneDeep(this.post)
      post.content = JSON.stringify(post.content)
      post.image_large = post.image_large._id
      post.image_small = post.image_small._id
      post.user = post.user._id
      post.category = post.category._id
      post.status = post.status._id
      if (post._id) {
        this.$store.dispatch('updatePost', post).then((res) => {
          this.$notify({
            title: 'Success',
            message: 'Adding Post',
            type: 'success'
          })
          this.closeModale()
        })
      } else {
        this.$store.dispatch('addNewPost', post).then((res) => {
          this.$notify({
            title: 'Success',
            message: 'Adding Post',
            type: 'success'
          })
          this.closeModale()
        })
      }
    }
  }
}
</script>
<style scoped>
.clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .bottom {
    float: right;
  }
</style>
