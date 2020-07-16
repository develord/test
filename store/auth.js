import { login } from '@/apollo/mutations'
import Cookies from 'js-cookie'
import { getProviderMutate } from '@/helpers/getProviderQuery'

export const state = () => ({
  email: null,
  token: '',
  loggedIn: false
})

export const getters = {
  isAuthenticated (state) {
    return state.loggedIn
  },

  loggedInUser (state) {
    return state.email
  }
}

export const mutations = {
  SET_USER (state, user) {
    state.email = user.email
    state.token = user.token
    state.loggedIn = true
    Cookies.set('user', JSON.stringify({ user: { token: state.token } }))
  },
  async LOGOUT_USER (state) {
    state.email = null
    state.token = null
    state.loggedIn = false
    Cookies.remove('user')
    await true
  }
}

export const actions = {
  async login (context, user) {
    console.log({ ...user })
    const auth = await getProviderMutate.call(this, login, { ...user })
    if (auth.data.login) {
      user.token = auth.data.login
      context.commit('auth/SET_USER', user, { root: true })
      return auth
    } else {
      throw new Error('User can\'t be logged in')
    }
  }
}
