const mongoose = require('mongoose')

const Contactchema = new mongoose.Schema({
  location: String,
  mail: String,
  tel: String,
  content: String
})

module.exports = mongoose.model('Contact', Contactchema)
