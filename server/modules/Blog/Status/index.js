const mongoose = require('mongoose')

const statusSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  desc: {
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
  },
  deleted_at: {
    type: Date,
    default: null
  }
})

module.exports = mongoose.model('Status', statusSchema)
