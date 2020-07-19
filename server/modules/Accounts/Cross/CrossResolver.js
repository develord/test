const { ForbiddenError, ApolloError } = require('apollo-server-express')
const { getCross } = require('../../../dataviz/crossList')
const { getRate } = require('../../../dataviz/getRate')
/**
 * Cross Crosss
 * - crosss: [Crosss]
 */
const Query = {
  cross: async () => {
    const crossAll = await getCross()
    if (crossAll.status === 403) { throw new ForbiddenError(crossAll.errorMessage) }
    if (crossAll.status === (400 || 404)) { throw new ApolloError(crossAll.errorMessage) }
    return crossAll.crossList
  }
}
/**
 * User Mutations
 * - updateUser: Int (number of items updated)
 */
const Mutation = {
  getRate: async (_, args) => {
    const response = await getRate(args.instrument)
    if (!response.enrrorMessage) {
      return response.data.rate
    }
  }
}
/** Exports **/
module.exports = { Query, Mutation }
