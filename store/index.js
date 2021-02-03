import { posts, contact, tagById, tags, teams, teamById, postById, images, page, categoryElements } from '~/apollo/query'
import { createTag, updateContact, createContact, deleteTag, updateTag, createTeam, updateTeam, deleteTeam, deletePost, createPost, updatePost, uploadFile, deleteImage } from '~/apollo/mutations'
const _ = require('lodash')

export const state = () => ({
  dark: true,
  snackbar: null,
  listePost: [],
  listeTag: [],
  teams: [],
  listeContact: [],
  listPublication: [],
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
  SET_TAGS (state, data) {
    state.listeTag = data
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
  SET_TEAMS (state, data) {
    state.teams = data
  },
  SET_Contact (state, data) {
    state.listeContact = data
  }
}

export const actions = {
  switchMode (context) {
    context.commit('INVERT_THEMES')
  },
  async uploadFile (_, file) {
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
  // Post Crud
  async addNewPost (_, post) {
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
  async updatePost (_, post) {
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
  async getPost (_, postId) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: postById,
      fetchPolicy: 'network-only',
      variables: {
        _id: postId
      }
    })
    const { content, ...post } = response.data.post
    post.content = JSON.parse(content)
    return post
  },
  async getPosts (context) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: posts,
      fetchPolicy: 'network-only'
    })
    context.commit('SET_POSTS', response.data.posts)
    return response.data.posts
  },
  // Team Crud
  async addNewTeam (_, post) {
    const { content, ...data } = post
    const str = JSON.stringify(content)
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: createTeam,
      variables: {
        ...data,
        content: str
      }
    })
    return response.data.createPost
  },
  async updateTeam (_, post) {
    const { content, ...data } = post
    const str = JSON.stringify(content)
    console.log(post)
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: updateTeam,
      variables: {
        ...data,
        content: str
      }
    })
    return response.data.updatePost
  },
  async getTeam (_, teamId) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: teamById,
      fetchPolicy: 'network-only',
      variables: {
        _id: teamId
      }
    })
    const { content, ...team } = response.data.teams[0]
    team.content = JSON.parse(content)
    return team
  },
  async getTeams (context) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: teams,
      fetchPolicy: 'network-only'
    })
    context.commit('SET_TEAMS', response.data.teams)
    return response.data.teams
  },
  async deleteTeam (_, data) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: deleteTeam,
      variables: {
        _id: data
      }
    })
    return response
  },
  // End Team
  async addNewContact (_, post) {
    const { content, ...data } = post
    const str = JSON.stringify(content)
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: createContact,
      variables: {
        ...data,
        content: str
      }
    })
    return response.data.createContact
  },
  async updateContact (_, post) {
    const { content, ...data } = post
    const str = JSON.stringify(content)
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: updateContact,
      variables: {
        ...data,
        content: str
      }
    })
    return response.data.updateContact
  },
  async getContact (context) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: contact,
      fetchPolicy: 'network-only'
    })
    context.commit('SET_Contact', response.data.contact)
    return response.data.contact
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
  async deletePost (_, data) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: deletePost,
      variables: {
        _id: data
      }
    })
    return response
  },
  async findPage (_, data) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: page,
      fetchPolicy: 'network-only',
      variables: {
        link: data
      }
    })
    return response
  },
  async deleteImage (_, data) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: deleteImage,
      variables: {
        _id: data
      }
    })
    return response
  }
}
