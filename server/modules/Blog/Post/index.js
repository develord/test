const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    default: null
  },
  h1: {
    type: String,
    default: null
  },
  content: {
    type: String,
    default: null
  },
  image_large: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
    default: null
  },
  image_small: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
    default: null
  },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tag',
      default: null
    }
  ],
  link: {
    type: String,
    default: null
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  status: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Status'
  },
  componentName: {
    type: String,
    default: 'Base'
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

module.exports = mongoose.model('Post', postSchema)
