<template>
  <fragment>
    <SubHeaderSample />
    <h1>im  a research page</h1>
  </fragment>
</template>
<script>
import SubHeaderSample from '~/components/front/components/SubHeaderSample.vue'
export default {
  layout: 'Default',
  transition: 'slide-bottom',
  components: {
    SubHeaderSample
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
