const axios = require('axios')

exports.getRate = async (instrument) => {
  const rate = await axios.get(`https://api.ibanfirst.com/PublicAPI/Rate/${instrument}/`)
  return rate
}
