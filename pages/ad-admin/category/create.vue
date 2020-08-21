<template>
  <div>
    <client-only>
      <form-add-category :post="category" />
    </client-only>
  </div>
</template>
<script>

export default {
  layout: 'Back',
  middleware: 'auth',
  components: {
    formAddCategory: () => import('~/componants/formAddCategory')
  },
  data () {
    return {
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
      }
    }
  },
  beforeMount () {
    const categoryId = this.$route.query.category
    if (categoryId) {
      this.category = this.$store.getters.getCategory(categoryId)
    }
  }
}
</script>
