const Permission = require('.')

/**
 * Permission Queries
 * - categories: [Permission]
 * - Permission: Permission
 */
const Query = {
  permissions: (_, args, { auth }) => {
    // if (!auth) { return null }
    return Permission.find()
  },
  permission: (_, { _id }) => Permission.findOne({ _id })
}

/**
 * Permission Mutations
 * - addPermission: [Permission]
 * - updatePermission: Int (number of items updated)
 * - deletePermission: Int (number of items deleted)
 */
const Mutation = {
  createPermission: (_, { name, desc }) => new Permission({ name, desc }).save(),
  updatePermission: async (_, { _id, name, desc }) => {
    const updated = await Permission.findOneAndUpdate({ _id }, { name, desc }, {
      new: true
    })
    return updated.n
  },
  deletePermission: (_, { _id }) => Permission.deleteOne({ _id })
}

/** Exports **/
module.exports = { Query, Mutation }
