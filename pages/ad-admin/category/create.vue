<template>
  <client-only>
    <FormBase
      :form-object="formObject"
      :form-model="category"
      :data="{status: listStatus}"
      @cancelForm="cancel"
      @submitForm="save"
    />
  </client-only>
</template>
<script>
import { statuses } from '@/apollo/query'
import formObject from './form.json'
import FormBase from '~/components/form/base'

export default {
  name: 'CategoryCreate',
  layout: 'Back',
  middleware: 'auth',
  components: {
    FormBase
  },
  apollo: {
    statuses: {
      query: statuses
    }
  },
  data () {
    return {
      listStatus: [],
      category: {
        _id: null,
        title: null,
        name: null,
        status: null,
        user: this.$store.state.auth._id,
        link: null,
        description: null,
        h1: null,
        content: null,
        image_large: null,
        image_small: null
      },
      formObject
    }
  },
  watch: {
    statuses (newVal) {
      this.listStatus = newVal
    }
  },
  beforeMount () {
    const categoryId = this.$route.query.category
    if (categoryId) {
      this.category = this.$store.getters['category/getCategory'](categoryId)
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
        if (this.category._id) {
          mut = 'updateCategory'
        } else {
          mut = 'createCategory'
        }
        // eslint-disable-next-line camelcase
        const { status, image_large, image_small, user, ...y } = this.category
        if (typeof this.category.user === 'object') { y.status = this.category.user._id } else { y.status = this.category.status }
        if (typeof this.category.status === 'object') { y.status = this.category.status._id } else { y.status = this.category.status }
        if (typeof this.category.status === 'object') { y.status = this.category.status._id } else { y.status = this.category.status }
        if (typeof this.category.image_small === 'object') { y.image_small = this.category.image_small._id } else { y.image_small = this.category.image_small }
        if (typeof this.category.image_large === 'object') { y.image_large = this.category.image_large._id } else { y.image_large = this.category.image_large }
        await this.$store.dispatch(`category/${mut}`, y).then(async (res) => {
          this.$store.dispatch('category/getCategories')
          await this.$router.push({ name: 'ad-admin-category' })
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
