import { posts, images } from '@/apollo/query'
import { deletePost, createPost, uploadFile, deleteImage } from '@/apollo/mutations'

export const state = () => ({
  dark: true,
  snackbar: null,
  listePost: [],
  images: []
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
  SET_IMAGES (state, data) {
    state.images = data
  }

}

export const actions = {
  switchMode (context) {
    context.commit('INVERT_THEMES')
  },
  async uploadFile (context, file) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: uploadFile,
      variables: {
        file
      },
      context: {
        hasUpload: true
      }
    })
    return response
  },
  async addNewPost (context, post) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: createPost,
      variables: {
        ...post
      }
    })
    context.commit('PUSH_POST', response.data.createPost)
    return response.data.createPost
  },
  async getPosts (context) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: posts
    })
    context.commit('SET_POSTS', response.data.posts)
  },
  async getImages (context) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: images,
      fetchPolicy: 'network-only'
    })
    context.commit('SET_IMAGES', response.data.images)
  },
  async deletePost (context, data) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: deletePost,
      variables: {
        _id: data
      }
    })
    return response
  },
  async deleteImage (context, data) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: deleteImage,
      variables: {
        _id: data
      }
    })
    return response
  }
}
