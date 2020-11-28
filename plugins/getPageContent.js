
export default ({ app }, inject) => {
  inject('getPageContent', async (settings, { params, route, app, error, store, payload, $payloadURL, redirect }) => {
    const res = await store.dispatch('findPage', route.fullPath)
    // if (res.data.page && res.data.page.componentName) {
    // const component = res.data?.page?.componentName do not work for older node version
    let component
    if (res && res.data && res.data.page) {
      component = res.data?.page?.componentName
    }
    const config = (await import('~/components/front/schemas.json')).default
    const pageName = component || route.name
    if (pageName in config) {
      const configComponent = config[pageName]
      return { configComponent, ...res.data.page }
    } else {
      redirect('/404')
    }
  })
}
