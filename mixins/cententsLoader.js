
import {_} from 'lodash'

export default {
  head() {
    return {
      title: this.page.title,
      htmlAttrs: {
        lang: 'en',
        amp: true
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.page.description
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }]
      /* here load the head staff desc and title ....
      /* and olso define de Dataschemas model json
      */
    }
  },
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
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.finish()
    })
  }
}
