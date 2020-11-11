const _ = require('lodash')

export default ({ app }, inject) => {
  inject('getPageContent', async (settings, { params, route, app, error, store, payload, $payloadURL, redirect }) => {
    const page = await store.dispatch('findPage', route.fullPath)
    const dd = await import('~/components/front/schemas.json')
    return dd
  })
}
