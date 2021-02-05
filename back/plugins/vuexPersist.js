import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  // window.onNuxtReady(() => {
  new VuexPersistence({
    key: 'tfk',
    reducer: state => ({
      auth: state.auth,
      dark: state.dark
    })
  }).plugin(store)
  // })
}
