
export default {
  async asyncData(ctx) {
    const page = await ctx.app.$getPageContent({}, ctx)
    return {
      page
    }
  },
  computed: {
    pageComponent() {
      if (this.page && this.page.index.componentName) {
        return () => import(`~/components/front/${this.page.index.componentName}`)
      } else {
        return () => import(`~/components/front/Basic`)
      }
    }
  },
  watch: {
    page:{
        immediate: true,
        handler(newVal) {
            // console.log('ffffffffffffffff', newVal)
        }
    }
  },
  head() {
    return {
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.finish()
    })
  }
}
