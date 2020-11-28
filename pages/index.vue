<template>
  <div>
    <SubHeaderSample />
    <h1>im  a Home page</h1>
  </div>
</template>
<script>
import SubHeaderSample from '~/components/front/components/SubHeaderSample.vue'
import page from '~/mixins/page.js'

export default {
  layout: 'Default',
  components: {
    SubHeaderSample
  },
  mixins: [page],
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
