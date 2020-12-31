const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
  name: String,
  slug: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
})

module.exports = mongoose.model('Tag', imageSchema)
