// const Permission = require('.')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { UserInputError } = require('apollo-server-express')
const User = require('../User')
/**
 * Auth Queries
 */
const Query = {}

/**
 * Permission Mutations
 * - login: User
 * - register: Int
 */
const Mutation = {
  register: async (_, { name, email, password, role, image }) => {
    const passwordCrypted = await bcrypt.hash(password, 12)
    const user = { name, email, password: passwordCrypted, role, image }
    return new User(user).save()
  },
  login: async (_, { email, password }, { SECRET }) => {
    const user = await User.findOne({ email }).populate({
      path: 'role',
      populate: 'permissions'
    })
    if (!user) {
      throw new UserInputError('No user with this email')
      // throw new Error('No user with this email')
    }

    const validpass = await bcrypt.compare(password, user.password)

    if (!validpass) {
      throw new UserInputError('Incorrect Password')
    }

    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      SECRET,
      { expiresIn: '1y' }
    )

    return token
  }
}

/** Exports **/
module.exports = { Query, Mutation }
