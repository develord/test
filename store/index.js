import { posts } from '@/apollo/query'
import { deletePost } from '@/apollo/mutations'

export const state = () => ({
  dark: true,
  snackbar: null,
  listePost: []
})

export const getters = {
  getPost: state => (id) => {
    return state.listePost.find(post => post._id === id)
  }
}

export const mutations = {
  INVERT_THEMES (state) {
    state.dark = !state.dark
  },
  SET_POSTS (state, data) {
    state.listePost = data
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
  },
  async getPosts (context) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: posts
    })
    alert(response)
    context.commit('SET_POSTS', response.data.posts)
  },
  async deletePost (context, data) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: deletePost,
      variables: {
        _id: data
      }
    })
    return response
  }
}
