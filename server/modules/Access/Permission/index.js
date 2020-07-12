const mongoose = require('mongoose')

const permissionSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  desc: {
    type: String
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

module.exports = mongoose.model('Permission', permissionSchema)
