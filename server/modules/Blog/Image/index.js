const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
  filename: {
    type: String,
    require: true
  },
  high: {
    type: String,
    default: null
  },
  low: {
    type: String,
    default: null
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: null
  }
})

module.exports = mongoose.model('Image', imageSchema)
