const axios = require('axios')

exports.getCross = async (res) => {
  const accounts = await axios.get(`https://api.ibanfirst.com/PublicAPI/Cross/`)
  return accounts.data.crossList
}
