const axios = require('axios')

exports.getCross = async (res) => {
  const cross = await axios.get(`https://api.ibanfirst.com/PublicAPI/Cross/`)
  return cross.data
}
