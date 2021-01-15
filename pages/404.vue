<template>
  <div>
    <notFound />
  </div>
</template>
<script>
import notFound from '~/components/404.vue'
export default {
  layout: 'Default',
  head () {
    return {
      title: '404 not found'
    }
  },
  components: {
    notFound
  },
  data () {
    return {
    }
  }
}
</script>
