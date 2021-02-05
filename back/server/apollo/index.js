const jwt = require('jsonwebtoken')
const { ApolloServer } = require('apollo-server-express')
const { dev } = require('../config')
const typeDefs = require('./schemas')
const resolvers = require('./resolvers')
/** Import Schemas and Resolvers */

/**
 * Apollo Server constructor.
 * @url https://www.apollographql.com/docs/apollo-server/api/apollo-server/
 */
module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  playground: dev,
  /************************************
   * Make a global function to catch
   * all Apollo and Server errors
  *************************************/
  formatError: (err) => {
    return new Error(err)
    // if (err.message.startsWith('AuthenticationError')) {
    // }
    // return err
    // return new Error(err) // to delete after handel all error
  },
  context: async ({ req }) => {
    const SECRET = process.env.SECRET
    let auth = null

    const token = req.headers.authorization
    if (token) {
      auth = await jwt.verify(token, SECRET)
    }

    return {
      SECRET,
      auth
    }
  }
})
