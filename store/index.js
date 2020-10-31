import { posts, images, categories } from '@/apollo/query'
import { deletePost, createPost, updatePost, uploadFile, deleteImage, createCategory, deleteCategory } from '@/apollo/mutations'
const _ = require('lodash')

export const state = () => ({
  dark: true,
  snackbar: null,
  listePost: [],
  listeCategory: [],
  images: []
})

export const getters = {
  getPost: state => (id) => {
    const post = state.listePost.find(post => post._id === id)
    const data = _.cloneDeep(post)
    data.content = JSON.parse(data.content)
    return data
  },
  getCategory: state => (id) => {
    const category = state.listeCategory.find(category => category._id === id)
    const data = _.cloneDeep(category)
    try {
      const obj = JSON.parse(data.content)
      if (obj && typeof obj === 'object' && obj !== null) {
        data.content = JSON.parse(data.content)
      }
    } catch (err) {}
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
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: createPost,
      variables: {
        ...post
      }
    })
    return response.data.createPost
  },
  // async addNewCategory (context, category) {
  //   const response = await this.app.apolloProvider.defaultClient.mutate({
  //     mutation: createCategory,
  //     variables: {
  //       ...category
  //     }
  //   })
  //   return response.data.createCategory
  // },
  async updatePost (context, post) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: updatePost,
      variables: {
        ...post
      }
    })
    return response.data.updatePost
  },
  async getPosts (context) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: posts,
      fetchPolicy: 'network-only'
    })
    context.commit('SET_POSTS', response.data.posts)
  },
  // async getCategory (context) {
  //   const response = await this.app.apolloProvider.defaultClient.query({
  //     query: categories,
  //     fetchPolicy: 'network-only'
  //   })
  //   context.commit('SET_CATEGORY', response.data.categories)
  // },
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
  async deleteCategory (context, data) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: deleteCategory,
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
