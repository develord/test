
export default ({ app }, inject) => {
  inject('getPageContent', async (settings, { params, route, app, error, store, payload, $payloadURL, redirect }) => {
    const res = await store.dispatch('findPage', route.path)
    // if (res.data.page && res.data.page.componentName) {
    // const component = res.data?.page?.componentName do not work for older node version
    if (res && res.data && res.data.page && res.data.page.componentName) {
      const component = res.data.page.componentName // res.data.page.componentName.includes('-') ? res.data.page.componentName.split('-')[0] : res.data.page.componentName
      const config = (await import('~/components/front/schemas.json')).default

      if (component in config) {
        const configComponent = config[component]
        return { configComponent, ...res.data.page }
      }
    } else {
      redirect('/404')
    }
  })
}
