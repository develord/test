<template>
  <fragment>
    <client-only>
      <!-- <form-add-post :post="post" /> -->
      <FormBase
        :form-object="formObject"
        :form-model="post"
        :data="{categories: listCategories, status: listStatus}"
        @cancelForm="cancel"
        @submitForm="save"
      />
    </client-only>
  </fragment>
</template>
<script>
import { categories, statuses } from '@/apollo/query'
import formObject from './form.json'
import FormBase from '~/components/form/base'

export default {
  name: 'PostCreate',
  layout: 'Back',
  middleware: 'auth',
  components: {
    // formAddPost: () => import('~/components/formAddPost')
    FormBase
  },
  apollo: {
    categories: {
      query: categories
    },
    statuses: {
      query: statuses
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
        content: null,
        image_large: null,
        image_small: null,
        link: null,
        user: '5f1067cf51c11630708dc644',
        category: null,
        status: null
      },
      listStatus: [],
      listCategories: []
    }
  },
  watch: {
    categories (newVal) {
      this.listCategories = newVal
    },
    statuses (newVal) {
      this.listStatus = newVal
    }
  },
  beforeMount () {
    const postId = this.$route.query.post
    if (postId) {
      this.post = this.$store.getters.getPost(postId)
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
      //
    }
  }
}
</script>
