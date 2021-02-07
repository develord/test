// const { AuthenticationError } = require('apollo-server-express')
// const Role = require('../Role')
const bcrypt = require('bcrypt')
const Role = require('../Role')
const User = require('.')
/**
 * User Queries
 * - categories: [User]
 * - user: User
 */
const Query = {
  users: async () => {
    const usersAll = await User.find().populate({
      path: 'role',
      populate: 'permissions'
    })
    return usersAll
  },
  user: async (_, args) => {
    const usr = await User.findOne({ _id: args._id }).populate({
      path: 'role',
      populate: 'permissions'
    })
    return usr
  }
}

/**
 * User Mutations
 * - addUser: [User]
 * - updateUser: Int (number of items updated)
 * - deleteUser: Int (number of items deleted)
 */
const Mutation = {
  createUser: async (_, { name, email, password, roleId }/*, { user } */) => {
    /**
     * An example how to handle context (auth) (3rd argument of createUser)
     * if (!user) {
     *  throw new AuthenticationError('Forbi')
     * }
     */
    const role = await Role.findOne({ _id: roleId })
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    const hashpassword = bcrypt.hashSync(password, salt)
    const userData = {
      name,
      email,
      password: hashpassword,
      role }
    const usr = await new User(userData)
    return usr.save()
  },
  updateUser: async (_, { _id, name, email, password, roleId }) => {
    if (password) {
      const saltRounds = 10
      const salt = bcrypt.genSaltSync(saltRounds)
      const hashpassword = bcrypt.hashSync(password, salt)
      const updated = await User.findOneAndUpdate({ _id }, { name, email, password: hashpassword, role: roleId }, {
        new: true
      })
      return updated.n
    } else {
      const updated = await User.findOneAndUpdate({ _id }, { name, email, role: roleId })
      return updated.n
    }
  },
  deleteUser: async (_, _id) => {
    const removed = await User.deleteOne({ _id })
    return removed.deletedCount
  }
}

/** Exports **/
module.exports = { Query, Mutation }
