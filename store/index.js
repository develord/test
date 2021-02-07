import { posts, users, user, role, roles, contact, permissions, permission, tagById, tags, teams, teamById, postById, images, page, categoryElements } from '~/apollo/query'
import { createTag, createUser, updateUser, deleteUser, createRole, deleteRole, updateRole, createPermission, deletePermission, updateContact, updatePermission, createContact, deleteTag, updateTag, createTeam, updateTeam, deleteTeam, deletePost, createPost, updatePost, uploadFile, deleteImage } from '~/apollo/mutations'
const _ = require('lodash')

export const state = () => ({
  dark: true,
  snackbar: null,
  listePost: [],
  listeTag: [],
  listeRole: [],
  listeUser: [],
  teams: [],
  listeContact: [],
  listePermission: [],
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
  },
  SET_PERMISSIONS (state, data) {
    state.listePermission = data
  },
  SET_ROLES (state, data) {
    state.listeRole = data
  },
  SET_USERS (state, data) {
    state.listeUser = data
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
  // User Crud
  async addNewUser (_, user) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: createUser,
      variables: {
        ...user
      }
    })
    return response.data.createUser
  },
  async updateUser (_, user) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: updateUser,
      variables: {
        ...user
      }
    })
    return response.data.updateUser
  },
  async getUsers (context) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: users,
      fetchPolicy: 'network-only'
    })
    context.commit('SET_USERS', response.data.users)
    return response.data.users
  },
  async getUser (_, userId) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: user,
      fetchPolicy: 'network-only',
      variables: {
        _id: userId
      }
    })
    return response.data.user
  },
  async deleteUser (_, data) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: deleteUser,
      variables: {
        _id: data
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
  async getPermission (_, permissionId) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: permission,
      fetchPolicy: 'network-only',
      variables: {
        _id: permissionId
      }
    })
    return response.data.permission
  },
  async getPosts (context) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: posts,
      fetchPolicy: 'network-only'
    })
    context.commit('SET_POSTS', response.data.posts)
    return response.data.posts
  },
  async getPermissions (context) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: permissions,
      fetchPolicy: 'network-only'
    })
    context.commit('SET_PERMISSIONS', response.data.permissions)
    return response.data.permissions
  },
  async addNewPermission (_, permission) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: createPermission,
      variables: {
        ...permission
      }
    })
    return response.data.createPermission
  },
  // Team Crud
  async getRole (_, roleId) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: role,
      fetchPolicy: 'network-only',
      variables: {
        _id: roleId
      }
    })
    return response.data.role
  },
  async getRoles (context) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: roles,
      fetchPolicy: 'network-only'
    })
    context.commit('SET_ROLES', response.data.roles)
    return response.data.roles
  },
  async addNewRole (_, role) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: createRole,
      variables: {
        ...role
      }
    })
    return response.data.createRole
  },
  async updateRole (_, role) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: updateRole,
      variables: {
        ...role
      }
    })
    return response.data.updateRole
  },

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
    const { content, ...team } = response.data.team
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
  async updatePermission (_, permission) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: updatePermission,
      variables: {
        ...permission
      }
    })
    return response.data.updatePermission
  },
  async deleteRole  (_, data) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: deleteRole,
      variables: {
        _id: data
      }
    })
    return response
  },
  async deletePermission  (_, data) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: deletePermission,
      variables: {
        _id: data
      }
    })
    return response
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
