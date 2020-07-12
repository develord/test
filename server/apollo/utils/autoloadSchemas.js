/**
 * Resolve all Appolo types and query of the given namespaces.
 * @param {string} namespaces namespace to resolve
 * @return {string} a full schema string
 */

const modulePath = require('./modulePath')

module.exports = (namespaces) => {
  let typesString = ''
  let queryString = ''
  let mutationString = ''

  for (let i = 0; i < namespaces.length; i++) {
    const module = namespaces[i]

    const schema = require(modulePath(module) + 'Schema')

    typesString += schema.type
    queryString += schema.query
    mutationString += schema.mutation
  }

  return typesString + `, type Query {` + queryString + '}' + `, type Mutation {` + mutationString + `}`
}
