const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  title: {
    type: String,
    default: null
  },
  description: {
    type: String,
    default: null
  },
  componentName: {
    type: String,
    default: 'Base'
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
  link: {
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

const Category = mongoose.model('Category', categorySchema)

module.exports = Category
