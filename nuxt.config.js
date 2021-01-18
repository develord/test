/* eslint-disable no-template-curly-in-string */
const path = require('path')

module.exports = {
  mode: 'universal',

  server: {
    port: 4000, // par défaut : 3000
    host: '0.0.0.0' // par défaut : localhost
  },
  css: [
    // '~/assets/css/main.css'
  ],
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
    ]
  },
  router: {
    prefetchLinks: true,
    trailingSlash: false,
    linkActiveClass: 'active-link'
  },

  loading: {
    color: '#00C48D'
  },

  pwa: {
    manifest: {
      name: 'CharmaLab',
      short_name: 'CharmaLab',
      description: 'CharmaLab',
      lang: 'en',
      start_url: '/',
      display: 'standalone',
      useWebmanifestExtension: false,
      theme_color: '#188269',
      background_color: '#000'
    },
    workbox: {
      /* workbox options */
      dev: false,
      offlineStrategy: 'StaleWhileRevalidate'
    }
  },

  pageTransition: {
    name: 'my-page',
    mode: 'out-in',
    beforeEnter (el) {
    }
  },

  buildModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    'nuxt-compress',
    '@nuxtjs/vuetify',
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
    { src: '~/plugins/vue-progressive-image', mode: 'client' }
  ],
  serverMiddleware: [
    (req, res, next) => {
      res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
      next()
    }
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
