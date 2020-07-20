
export const state = () => ({
  dark: true,
  snackbar: null
})

export const getters = {

}

export const mutations = {
  INVERT_THEMES (state) {
    state.dark = !state.dark
  },
  SET_SNACKBAR (state, data) {
    state.snackbar = data
  }
}

export const actions = {
  switchMode (context) {
    context.commit('INVERT_THEMES')
  },
  pushNotif (context, snackbar) {
    context.commit('SET_SNACKBAR', snackbar)
    /* dispatch your snackbar with this params
        message: String
        type: is-primary, is-info, is-success, is-warning, is-danger
    */
  }
}
