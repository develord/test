module.exports = {
  head: {
    titleTemplate: 'Nuxt HN | %s',
    meta: [
      { property: 'og:image', content: 'https://user-images.githubusercontent.com/904724/58238637-f189ca00-7d47-11e9-8213-ae072d7cd3aa.png' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@nuxt_js' },
      { name: 'robots', content: 'noindex, nofollow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: 'http://bus-world.fr/' },
      { rel: 'preconnect', href: 'http://bus-world.fr/' }
    ]
  },

  server: {
    port: 3000, // par défaut : 3000
    host: '0.0.0.0' // par défaut : localhost
  },

  router: {
    prefetchLinks: true,
    trailingSlash: false,
    linkActiveClass: 'active-link',
    extendRoutes(routes, resolve) {
      routes.push({
        name: '404',
        path: '*',
        component: resolve(__dirname, 'components/404.vue')
      })
    }
  },

  loading: {
    color: '#00C48D'
  },

  manifest: {
    name: 'Bus-World',
    short_name: 'Bus World',
    description: 'Bus World',
    theme_color: '#2F495E',
    start_url: '/'
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
    { src: '~/plugins/vue-progressive-image', mode: 'client' }
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
