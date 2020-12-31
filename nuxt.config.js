/* eslint-disable no-template-curly-in-string */
const path = require('path')

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
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
    ]
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },

  css: [
    '~/assets/css/main.css'
  ],

  router: {
    prefetchLinks: false,
    trailingSlash: false,
    linkActiveClass: 'active-link'
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
    '@nuxtjs/apollo',
    'nuxt-compress',
    '@nuxtjs/style-resources'
  ],

  'nuxt-compress': {
    gzip: {
      cache: true
    },
    brotli: {
      threshold: 10240
    }
  },

  apollo: {
    clientConfigs: {
      default: '~/apollo/config/apolloConfig.js'
    }
  },

  plugins: [
    { src: '~/plugins/vuexPersist', mode: 'client' },
    { src: '~/plugins/vue-progressive-image', mode: 'client' },
    { src: '~/plugins/getPageContent' }
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
    analyze: false,
    extractCSS: false,
    extend (config, ctx) {
      const isProd = process.env.NODE_ENV === 'production'
      if (isProd && ctx.isClient) {
        config.optimization.splitChunks.maxSize = 149856 // 244 Kib
        config.optimization.splitChunks.maxAsyncRequests = 30
      }
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.resolve.alias['~'] = path.join(__dirname)
    }
  }
}
