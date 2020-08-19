const createPost = require('./createPost.gql')
const updatePost = require('./updatePost.gql')
const deletePost = require('./deletePost.gql')
const uploadFile = require('./uploadFile.gql')
const login = require('./login.gql')
const deleteImage = require('./deleteImage.gql')

module.exports = { createPost, deletePost, login, uploadFile, deleteImage, updatePost }
