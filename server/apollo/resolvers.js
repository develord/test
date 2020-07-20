const { namespaces } = require('../config')
const autoloadResolvers = require('./utils/autoloadResolvers')

const resovlers = autoloadResolvers(namespaces)

module.exports = {
  Query: resovlers.Query,
  Mutation: resovlers.Mutation
}
