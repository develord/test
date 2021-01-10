<template>
  <div>
    <img
      v-lazy="{ src: '../images/' + test.high, loading: '../images/' + test.low }"
      :src=" '../images/' + test.high"
      class="is-lazy"
      style="height:468px; width: 388px;"
    >
  </div>
</template>
<script>

export default {
  name: 'ImageResearch',
  components: {
  },
  computed: {
    test () {
      return this.$attrs.image_small
    }
  }
}
</script>
