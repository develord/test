export default function ({ $axios, store, route, app }) {
  $axios.onRequest((config) => {
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      const snackbar = {
        left: false,
        position: 'bottom',
        right: true,
        show: true,
        timeout: 8000
      }
      snackbar.text = error.response.data.message
      snackbar.color = 'error-snackbar'
      store.commit('SET_SNACKBAR', snackbar)
    }
    app.router.push({ name: 'index' })
    return true
  })
}
