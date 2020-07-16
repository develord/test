
import { accounts, cross } from '@/apollo/query'
import { getProviderQuery, getProviderMutate } from '@/helpers/getProviderQuery'
import { getRate } from '@/apollo/mutations'

export const state = () => ({
  selectedCountry: null,
  accounts: [],
  instruments: []
})

export const getters = {
}

export const mutations = {
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
  async getRate (context, instrument) {
    const response = await getProviderMutate.call(this, getRate, instrument)
    return response
  }
}
