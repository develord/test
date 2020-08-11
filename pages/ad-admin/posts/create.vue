<template>
  <div>
    <client-only>
      <form-add-post />
    </client-only>
  </div>
</template>
<script>
import formAddPost from '~/componants/posts/formAddPost'
export default {
  name: 'PostCreate',
  layout: 'Back',
  middleware: 'auth',
  components: {
    formAddPost
  }
}
</script>
