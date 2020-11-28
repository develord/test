<template>
  <fragment>
    <SubHeaderSample />
    <h1>im  a team page</h1>
  </fragment>
</template>
<script>
import SubHeaderSample from '~/components/front/components/SubHeaderSample.vue'
import page from '~/mixins/page.js'
import cententsLoader from '~/mixins/cententsLoader.js'

export default {
  layout: 'Default',
  components: {
    SubHeaderSample
  },
  mixins: [page, cententsLoader],
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
