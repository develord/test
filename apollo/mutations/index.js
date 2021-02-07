const createPost = require('./createPost.gql')
const updatePost = require('./updatePost.gql')
const deletePost = require('./deletePost.gql')
const uploadFile = require('./uploadFile.gql')
const login = require('./login.gql')
const deleteImage = require('./deleteImage.gql')
const createCategory = require('./createCategory.gql')
const deleteCategory = require('./deleteCategory.gql')
const updateCategory = require('./updateCategory.gql')
// Tags shemas
const createTag = require('./createTag.gql')
const deleteTag = require('./deleteTag.gql')
const updateTag = require('./updateTag.gql')

const updateContact = require('./updateContact.gql')
const createContact = require('./createContact.gql')

const updateTeam = require('./updateTeam.gql')
const deleteTeam = require('./deleteTeam.gql')
const createTeam = require('./createTeam.gql')
const createPermission = require('./createPermission.gql')
const updatePermission = require('./updatePermission.gql')

const createRole = require('./createRole.gql')
const updateRole = require('./updateRole.gql')
const deleteRole = require('./deleteRole.gql')

const updateUser = require('./updateUser.gql')
const createUser = require('./createUser.gql')
const deleteUser = require('./deleteUser.gql')
module.exports = { deleteUser, updateUser, createUser, updateRole, deleteRole, createRole, updateContact, createPermission, updatePermission, createContact, createTag, deleteTag, updateTag, updateTeam, deleteTeam, createTeam, createPost, deletePost, login, uploadFile, deleteImage, updatePost, createCategory, deleteCategory, updateCategory }
