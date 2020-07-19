const { getAccounts } = require('../../../dataviz/getAccounts')
/**
 * Account Queries
 * - accounts: [Account]
 */
const Query = {
  accounts: () => {
    const accountsAll = getAccounts()
    return accountsAll
  }
}
const Mutation = {
}
/** Exports **/
module.exports = { Query, Mutation }
