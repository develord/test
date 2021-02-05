const Permission = require('.')

/**
 * Permission Queries
 * - categories: [Permission]
 * - Permission: Permission
 */
const Query = {
  permissions: (_, args, { auth }) => {
    if (!auth) { return null }
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
  updatePermission: async (_, args) => {
    const _id = args._id
    const { name, desc } = args.data
    const updated = await Permission.updateOne({ _id }, { name, desc })
    return updated.n
  },
  deletePermission: (_, { _id }) => Permission.deleteOne({ _id })
}

/** Exports **/
module.exports = { Query, Mutation }
