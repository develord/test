const modulePath = require('./modulePath')

/**
 * Create the Resolver {Query, Mutation} object for ApolloServer.
 * Fetch all namespaces given in the array and autoload Resolver.
 * @param {Array} namespaces Array
 * @return {Object} {Query, Mutation}
 */
const autoloadResolvers = (namespaces) => {
  let Query = {}
  let Mutation = {}

  for (let i = 0; i < namespaces.length; i++) {
    const module = namespaces[i]
    const resolver = require(`${modulePath(module)}Resolver`)
    Query = Object.assign(Query, resolver.Query)
    Mutation = Object.assign(Mutation, resolver.Mutation)
  }

  return { Query, Mutation }
}

module.exports = autoloadResolvers
