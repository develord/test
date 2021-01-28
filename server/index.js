const app = require('express')()
const { Nuxt, Builder } = require('nuxt')
const consola = require('consola')
const apollo = require('./apollo/index')
const { config, dev } = require('./config')
require('./db')()

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // apply Apollo middleware
  apollo.applyMiddleware({
    app,
    bodyParserConfig: {
      limit: '10mb'
    }
  })

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `🚀 Server listening on http://${host}:${port}${apollo.graphqlPath}`,
    badge: true
  })
}
start()
