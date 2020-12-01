<template>
  <div>
    <notFound />
  </div>
</template>
<script>
import notFound from '~/components/404.vue'
export default {
  layout: 'Default',
  components: {
    notFound
  },
  data () {
    return {
    }
  }
}
</script>
