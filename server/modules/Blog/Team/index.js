const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  title: {
    type: String,
    default: null
  },
  degree: {
    type: [String],
    default: null
  },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tag',
      default: null
    }
  ],
  image_large: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
    default: null
  },
  link: {
    type: String,
    default: null
  },
  content: {
    type: String,
    default: null
  },
  email: {
    type: String,
    default: null
  },
  twitter: {
    type: String,
    default: null
  },
  cv: {
    type: String,
    default: null
  },
  google: {
    type: String,
    default: null
  },
  linkedin: {
    type: String,
    default: null
  },
  researchgate: {
    type: String,
    default: null
  },
  github: {
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

module.exports = mongoose.model('Team', teamSchema)
