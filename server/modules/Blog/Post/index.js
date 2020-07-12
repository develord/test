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
    type: String,
    default: null
  },
  image_small: {
    type: String,
    default: null
  },
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
