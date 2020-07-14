
import { accounts, cross } from '@/apollo/query'
import { getProviderQuery } from '@/helpers/getProviderQuery'

export const state = () => ({
  dark: true,
  token: '',
  snackbar: null,
  selectedCountry: null,
  accounts: [],
  instruments: []
})

export const getters = {
  getPosts: state => (id) => {
    return state.listePost.find(post => post._id === id)
  }
}

export const mutations = {
  INVERT_THEMES (state) {
    state.dark = !state.dark
  },
  SET_SNACKBAR (state, data) {
    state.snackbar = data
  },
  SET_COUNTRY (state, data) {
    if (state.selectedCountry === data) { state.selectedCountry = null } else { state.selectedCountry = data }
  },
  SET_ACCOUNTS (state, data) {
    state.accounts = data
  },
  SET_CROSS (state, data) {
    state.instruments = data
  }
}

export const actions = {
  switchMode (context) {
    context.commit('INVERT_THEMES')
  },
  setCountrySelected (context, data) {
    context.commit('SET_COUNTRY', data.country)
  },
  async getAccount (context) {
    const response = await getProviderQuery.call(this, accounts)
    context.commit('SET_ACCOUNTS', response.data.accounts)
  },
  async getCross (context) {
    const response = await getProviderQuery.call(this, cross)
    context.commit('SET_CROSS', response.data.cross)
  },
  pushNotif (context, snackbar) {
    context.commit('SET_SNACKBAR', snackbar)
    /* dispatch your snackbar with this params
        message: String
        type: is-primary, is-info, is-success, is-warning, is-danger
    */
  }
}
