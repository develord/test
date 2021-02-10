module.exports = {
  head: {
    titleTemplate: 'Nuxt HN | %s',
    meta: [
      { name: 'robots', content: 'noindex'},
      { property: 'og:image', content: 'https://user-images.githubusercontent.com/904724/58238637-f189ca00-7d47-11e9-8213-ae072d7cd3aa.png' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@nuxt_js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: 'http://bus-world.fr' },
      { rel: 'preconnect', href: 'http://bus-world.fr' }
    ]
  },

  server: {
    port: 3000, // par défaut : 3000
    host: '0.0.0.0' // par défaut : localhost
  },

  loading: {
    color: '#00C48D'
  },

  pwa: {
    manifest: {
      name: 'Bus world',
      short_name: 'Bus world',
      description: 'Bus world',
      lang: 'fr',
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

  buildModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/apollo'
  ],

  apollo: {
    clientConfigs: {
      default: '~/apollo/config/apolloConfig.js'
    }
  },

  plugins: [
  //  '~/plugins/swr',
  //  '~/plugins/filters'
  ],

  serverMiddleware: [
    (_, res, next) => {
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
  }
}
