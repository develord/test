const Role = require('.')

/**
 * Role Queries
 * - roles: [Role]
 * - role: Role
 */
const Query = {
  roles: async () => {
    const rolesAll = await Role.find().populate('permissions')
    return rolesAll
  },
  role: async (_, _id) => {
    const rol = await Role.findOne({ _id }).populate('permissions')
    return rol
  }
}

/**
 * Role Mutations
 * - createRole: [Role]
 * - updateRole: Int (number of items updated)
 * - deleteRole: Int (number of items deleted)
 */
const Mutation = {
  createRole: async (_, { name, desc, permissions }) => {
    const role = await new Role({ name, desc, permissions })
    return role.save()
  },
  updateRole: async (_, { _id, name, desc, permissions }) => {
    console.log(permissions)
    const updated = await Role.findOneAndUpdate({ _id }, { name, desc, permissions }, {
      new: true
    })
    return updated.n
  },
  deleteRole: async (_, args) => {
    const removed = await Role.deleteOne({ _id: args._id })
    return removed.deletedCount
  }
}

/** Exports **/
module.exports = { Query, Mutation }
