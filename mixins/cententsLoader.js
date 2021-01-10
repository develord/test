
import {_} from 'lodash'

export default {
  async asyncData(ctx) {
    const page = await ctx.app.$getPageContent({}, ctx)
    return {
      page
    }
  },
  computed: {
    pageComponent() {
      if (this.page && this.page.componentName) {
        return () => import(`~/components/front/${_.startCase(_.camelCase(this.page.componentName.replace('-',''))).replace(/ /g, '')}.vue`)
      } else {
        return () => import(`~/components/front/Basic`)
      }
    }
  },
  watch: {
    '$route' () {
      this.page = null
    },
    page:{
        immediate: true,
        handler(newVal) {
          // set the head that head need
        }
    }
  },
  head() {
    return {
      /* here load the head staff desc and title ....
      /* and olso define de Dataschemas model json
      */
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.finish()
    })
  }
}
