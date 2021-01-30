const mongoose = require('mongoose')

const TagSchema = new mongoose.Schema({
  name: String,
  slug: String,
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
    default: null
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
})

module.exports = mongoose.model('Tag', TagSchema)
