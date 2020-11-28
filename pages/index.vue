<template>
  <fragment>
    <SubHeaderSample />
    <h1>im  a Home page</h1>
  </fragment>
</template>
<script>
import SubHeaderSample from '~/components/front/components/SubHeaderSample.vue'
import page from '~/mixins/page.js'

export default {
  layout: 'Default',
  transition: 'slide-bottom',
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
