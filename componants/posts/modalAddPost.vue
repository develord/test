<template>
  <el-dialog :visible.sync="visible" :title="title" width="90%">
    <div class="modal-card bg-modal">
      <el-form ref="form" :model="form" label-width="120px">
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
          <el-select v-model="post.category" placeholder="please select your zone">
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
          <imageUploader :file="post.image_large" />
        </el-form-item>
        <el-form-item label="Small Post img">
          <imageUploader :file="post.image_small" />
        </el-form-item>
        <el-form-item label="Content">
          <editor
            :content.sync="post.content"
          />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeModale">Cancel</el-button>
        <el-button type="primary" @click="addNewPost">Submit</el-button>
      </span>
    </div>
  </el-dialog>
</template>
<script>
import { categories, statuses } from '@/apollo/query'
import { createPost } from '@/apollo/mutations'
import editor from '@/componants/editor'
import imageUploader from '@/componants/imageUploader'

export default {
  components: { editor, imageUploader },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Dialogue'
    }
  },
  data () {
    return {
      form: null,
      file: null,
      listCategoy: [],
      listeStatus: [],
      post: {
        _id: null,
        title: null,
        description: null,
        h1: null,
        content: '',
        image_large: null,
        image_small: null,
        link: null,
        user: '5e77d1d25ac5da47466b70fc',
        category: null,
        status: null
      }
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
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
    },
    closeModale () {
      this.$emit('update:visible', false)
    },
    addNewPost () {
      this.$apollo.mutate({
        mutation: createPost,
        variables: {
          ...this.post
        }
      }).then((res) => {
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
</script>
