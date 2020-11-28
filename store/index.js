import { posts, images, page, categoryElements } from '@/apollo/query'
import { deletePost, createPost, updatePost, uploadFile, deleteImage } from '@/apollo/mutations'
const _ = require('lodash')

export const state = () => ({
  dark: true,
  snackbar: null,
  listePost: [],
  images: []
})

export const getters = {
  getPost: state => (id) => {
    const post = state.listePost.find(post => post._id === id)
    const data = _.cloneDeep(post)
    data.content = JSON.parse(data.content)
    return data
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
  // SET_CATEGORY (state, data) {
  //   state.listeCategory = data
  // }
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
    const { content, ...data } = post
    const str = JSON.stringify(content)
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: createPost,
      variables: {
        ...data,
        content: str
      }
    })
    return response.data.createPost
  },
  async updatePost (context, post) {
    const { content, ...data } = post
    const str = JSON.stringify(content)
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: updatePost,
      variables: {
        ...data,
        content: str
      }
    })
    return response.data.updatePost
  },
  async getCategoryElement (context, url) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: categoryElements,
      // fetchPolicy: 'network-only',
      variables: {
        link: url
      }
    })
    return response.data.categoryElements
  },
  async getPosts (context) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: posts
      // fetchPolicy: 'network-only'
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
  async findPage (context, data) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: page,
      // fetchPolicy: 'network-only',
      variables: {
        link: data
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
