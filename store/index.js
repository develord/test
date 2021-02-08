import { postById, tagById, posts, images, page, categoryElements, tags } from '~/apollo/query'
import { createTag, deleteTag, updateTag, deletePost, createPost, updatePost, uploadFile, deleteImage } from '~/apollo/mutations'
const _ = require('lodash')

export const state = () => ({
  dark: true,
  snackbar: null,
  listePost: [],
  listeTag: [],
  listPublication: [],
  images: []
})

export const getters = {
  getPost: state => (id) => {
    if (state.listePost.length > 0) {
      const post = state.listePost.find(post => post._id === id)
      const data = _.cloneDeep(post)
      data.content = JSON.parse(data.content)
      return data
    }
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
  },
  SET_PUBLICATION (state, data) {
    state.listPublication = data
  },
  SET_TAGS (state, data) {
    state.listeTag = data
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
  // Crud posts
  async addNewPost (context, post) {
    const { content, fiche, ...data } = post
    const str = JSON.stringify(content)
    const strFiche = JSON.stringify(fiche)
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: createPost,
      variables: {
        ...data,
        content: str,
        fiche: strFiche
      }
    })
    return response.data.createPost
  },
  async updatePost (context, post) {
    const { content, fiche, ...data } = post
    const str = JSON.stringify(content)
    const strFiche = JSON.stringify(fiche)
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: updatePost,
      variables: {
        ...data,
        content: str,
        fiche: strFiche
      }
    })
    return response.data.updatePost
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
  async getPosts (context) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: posts,
      fetchPolicy: 'network-only'
    })
    context.commit('SET_POSTS', response.data.posts)
  },
  async getPost (context, postId) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: postById,
      fetchPolicy: 'network-only',
      variables: {
        _id: postId
      }
    })
    const { content, fiche, ...post } = response.data.post
    post.fiche = JSON.parse(fiche)
    post.content = JSON.parse(content)
    return post
  },
  // Crud Tags
  async getTags (context) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: tags,
      fetchPolicy: 'network-only'
    })
    context.commit('SET_TAGS', response.data.tags)
  },
  async getTag (context, tagId) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: tagById,
      fetchPolicy: 'network-only',
      variables: {
        _id: tagId
      }
    })
    return response.data.tag
  },
  async addNewTag (context, tag) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: createTag,
      variables: {
        ...tag
      }
    })
    return response.data.createTag
  },
  async updateTag (context, tag) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: updateTag,
      variables: {
        ...tag
      }
    })
    return response.data.updateTag
  },
  async deleteTag (context, data) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: deleteTag,
      variables: {
        _id: data
      }
    })
    return response
  },
  // Getter
  async getCategoryElement (context, url) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: categoryElements,
      fetchPolicy: 'network-only',
      variables: {
        link: url
      }
    })
    context.commit('SET_PUBLICATION', response.data.categoryElements)
    return response.data.categoryElements
  },
  async getImages (context) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: images,
      fetchPolicy: 'network-only'
    })
    context.commit('SET_IMAGES', response.data.images)
  },
  async findPage (context, data) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: page,
      fetchPolicy: 'network-only',
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
