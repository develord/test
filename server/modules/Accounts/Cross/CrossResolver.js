const { getCross } = require('../../../dataviz/crossliste')
/**
 * Cross Crosss
 * - crosss: [Crosss]
 */
const Query = {
  cross: () => {
    const crossAll = getCross()
    return crossAll
  }
}
const Mutation = {
}
/** Exports **/
module.exports = { Query, Mutation }
