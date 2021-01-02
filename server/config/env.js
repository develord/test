/** Environement Configuration */
const dotenv = require('dotenv')
const config = require('../../nuxt.config')

config.dev = process.env.NODE_ENV === 'development'

const path = config.dev
  ? '.env.local'
  : '.env'
console.log(path)
dotenv.config({ path })

module.exports = {
  config,
  dev: config.dev
}
