const createPost = require('./createPost.gql')
const updatePost = require('./updatePost.gql')
const deletePost = require('./deletePost.gql')
const uploadFile = require('./uploadFile.gql')
const login = require('./login.gql')
const deleteImage = require('./deleteImage.gql')
const createCategory = require('./createCategory.gql')
const deleteCategory = require('./deleteCategory.gql')
const updateCategory = require('./updateCategory.gql')

module.exports = { createPost, deletePost, login, uploadFile, deleteImage, updatePost, createCategory, deleteCategory, updateCategory }
