// Post shemas
const createPost = require('./createPost.gql')
const updatePost = require('./updatePost.gql')
const deletePost = require('./deletePost.gql')
// category shemas
const createCategory = require('./createCategory.gql')
const deleteCategory = require('./deleteCategory.gql')
const updateCategory = require('./updateCategory.gql')
// Tags shemas
const createTag = require('./createTag.gql')
const deleteTag = require('./deleteTag.gql')
const updateTag = require('./updateTag.gql')
// other shemas
const uploadFile = require('./uploadFile.gql')
const login = require('./login.gql')
const deleteImage = require('./deleteImage.gql')

module.exports = { createTag, deleteTag, updateTag, createPost, deletePost, login, uploadFile, deleteImage, updatePost, createCategory, deleteCategory, updateCategory }
