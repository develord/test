import { login } from '@/apollo/mutations'
import Cookies from 'js-cookie'
import { getProviderMutate } from '@/helpers/getProviderQuery'

export const state = () => ({
  email: null,
  token: '',
  role: null,
  permission: [],
  loggedIn: false,
  _id: ''
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
    state._id = user._id
    state.role = user.role
    state.loggedIn = true
    Cookies.set('user', JSON.stringify({ user: { token: state.token } }))
  },
  async LOGOUT_USER (state) {
    state.email = null
    state.token = null
    state.loggedIn = false
    Cookies.remove('user')
    await true
  },
  SET_PERMISSIONS (state, data) {
    state.permission = data
  }
}

export const actions = {
  setPermissions (context, data) {
    context.commit('auth/SET_PERMISSIONS', data, { root: true })
  },
  async login (context, logpass) {
    const auth = await getProviderMutate.call(this, login, { ...logpass })
    if (auth.data.login) {
      const token = auth.data.login.token
      const user = {
        ...auth.data.login.user,
        token
      }
      context.commit('auth/SET_USER', user, { root: true })
      return auth
    } else {
      throw new Error('User can\'t be logged in')
    }
  }
}
