const mongoose = require('mongoose')

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  desc: {
    type: String
  },
  permissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Permission' }],
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: null
  }
})

module.exports = mongoose.model('Role', roleSchema)
