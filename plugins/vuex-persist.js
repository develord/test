import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  // window.onNuxtReady(() => {
  new VuexPersistence({
    key: 'tfk',
    reducer: state => state.auth
  }).plugin(store)
  // })
}
