<template>
  <fragment>
    <client-only>
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto">
            <v-card-title>
              <span>Form Post:</span>
            </v-card-title>
            <v-card-text>
              <FormBase
                :form-object="formObject"
                :form-model="post"
                :data="{category: listCategories, status: listStatus, tags: listTags}"
                @cancelForm="cancel"
                @submitForm="save"
              />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </client-only>
  </fragment>
</template>
<script>
import { categories, statuses, tags } from '@/apollo/query'
import formObject from './form.json'
import FormBase from '~/components/form/base'

export default {
  name: 'PostCreate',
  layout: 'Back',
  middleware: 'auth',
  components: {
    FormBase
  },
  apollo: {
    categories: {
      query: categories
    },
    statuses: {
      query: statuses
    },
    tags: {
      query: tags
    }
  },
  data () {
    return {
      formObject,
      post: {
        _id: null,
        title: null,
        description: null,
        h1: null,
        tags: null,
        gallery: null,
        content: null,
        image_large: null,
        image_small: null,
        link: null,
        user: this.$store.state.auth._id,
        category: null,
        status: null
      },
      listStatus: [],
      listTags: [],
      listCategories: []
    }
  },
  watch: {
    categories (newVal) {
      this.listCategories = newVal
    },
    statuses (newVal) {
      this.listStatus = newVal
    },
    tags (newVal) {
      this.listTags = newVal
    }
  },
  async beforeMount () {
    const postId = this.$route.query.post
    if (postId) {
      const post = await this.$store.dispatch('getPost', postId)
      const { user, ...data } = post
      data.user = this.post.user
      this.post = data
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
    cancel () {
      this.$router.go(-1)
    },
    async save () {
      try {
        let mut
        if (this.post._id) {
          mut = 'updatePost'
        } else {
          mut = 'addNewPost'
        }
        // eslint-disable-next-line camelcase
        const { status, gallery, tags, image_large, image_small, category, ...y } = this.post
        if (this.post.user && typeof this.post.user === 'object' && this.post.user._id) { y.user = this.post.user._id } else { y.user = this.post.user }
        if (this.post.category && typeof this.post.category === 'object' && this.post.category._id) { y.category = this.post.category._id } else { y.category = this.post.category }
        if (this.post.status && typeof this.post.status === 'object' && this.post.status._id) { y.status = this.post.status._id } else { y.status = this.post.status }
        if (this.post.image_small && typeof this.post.image_small === 'object' && this.post.image_small._id) { y.image_small = this.post.image_small._id } else { y.image_small = this.post.image_small }
        if (this.post.image_large && typeof this.post.image_large === 'object' && this.post.image_large._id) { y.image_large = this.post.image_large._id } else { y.image_large = this.post.image_large }
        if (this.post.gallery && Array.isArray(this.post.gallery) && this.post.gallery[0]._id) { y.gallery = this.post.gallery.map(el => el._id) } else { y.gallery = this.post.gallery }
        if (this.post.tags && Array.isArray(this.post.tags) && this.post.tags[0]._id) { y.tags = this.post.tags.map(el => el._id) } else { y.tags = this.post.tags }
        await this.$store.dispatch(`${mut}`, y).then(async (res) => {
          await this.$store.dispatch('getPosts')
          await this.$router.push({ name: 'ad-admin-posts' })
          this.$notify({
            title: 'Success',
            message: 'Adding New Page Group',
            type: 'success'
          })
        })
      } catch (error) {
        console.log('error adding new page', error)
      }
    }
  }
}
</script>
