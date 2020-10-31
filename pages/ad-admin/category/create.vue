<template>
  <client-only>
    <FormBase
      :form-object="formObject"
      :form-model="category"
      :data="{status: listStatus}"
      @cancelForm="cancel"
      @submitForm="save"
    />
    <!-- <form-add-category :post="category" /> -->
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
    // formAddCategory: () => import('~/components/formAddCategory'),
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
        description: null,
        h1: null,
        content: null,
        image_large: null,
        image_small: null,
        link: null
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
      this.category = this.$store.getters.getCategory(categoryId)
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
    save () {
      try {
        this.$store.dispatch('category/createCategory', this.category).then((res) => {
          this.$router.push({ name: 'ad-admin-category' })
          this.$notify({
            title: 'Success',
            message: 'Adding Category',
            type: 'success'
          })
        })
      } catch (error) {
        console.log('AAAA', error)
      }
    }
  }
}
</script>
