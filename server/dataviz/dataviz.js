const axios = require('axios')

exports.getAccounts = async (res) => {
  const accounts = await axios.get(`https://platform.ibanfirst.com/js/dataTestDevFront.json`)
  return accounts.data.accounts
}
