import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  // window.onNuxtReady(() => {
  new VuexPersistence({
    key: 'tfk'
  }).plugin(store)
  // })
}
