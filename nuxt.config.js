module.exports = {
  mode: 'universal',
  head: {
    titleTemplate: 'Amine',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'TheFucker Content Generator' },
      { property: 'og:image', content: 'https://user-images.githubusercontent.com/904724/58238637-f189ca00-7d47-11e9-8213-ae072d7cd3aa.png' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@nuxt_js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    prefetchLinks: false,
    trailingSlash: false,
    linkActiveClass: 'active-link'
    // extendRoutes (routes, resolve) {
    //   routes.push({
    //     name: 'notfound',
    //     path: '*',
    //     component: resolve(__dirname, 'pages/404.vue')
    //   })
    // }
  },

  loading: {
    color: '#00C48D'
  },

  manifest: {
    name: 'ProposalMate',
    short_name: 'ProposalMate',
    lang: 'fr',
    description: 'Create beautiful business proposals',
    theme_color: '#188269',
    background_color: '#000'
  },

  buildModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/apollo',
    '@nuxtjs/color-mode',
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      '~/assets/variables.scss'
    ]
  },

  apollo: {
    clientConfigs: {
      default: '~/apollo/config/apollo-config.js'
    }
  },

  plugins: [
    { src: '~/plugins/vuex-persist', mode: 'client' },
    { src: '~/plugins/highCharts', mode: 'client' },
    { src: '~/plugins/axios', mode: 'client' }
  ],

  render: {
    http2: {
      push: true
    },
    static: {
      maxAge: '1y',
      setHeaders (res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', `public, max-age=${15 * 60}`)
        }
      }
    }
  },

  build: {
    extractCSS: false,
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
