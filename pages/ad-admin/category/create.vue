<template>
  <div>
    <client-only>
      <form-add-post :post="post" />
    </client-only>
  </div>
</template>
<script>

export default {
  layout: 'Back',
  middleware: 'auth',
  components: {
    formAddPost: () => import('~/componants/formAddPost')
  },
  data () {
    return {
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
      }
    }
  },
  beforeMount () {
    const postId = this.$route.query.post
    if (postId) {
      this.post = this.$store.getters.getPost(postId)
    }
  }
}
</script>
