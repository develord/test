const { gql } = require('apollo-server-express')
const { namespaces } = require('../config')
const autoloadSchemas = require('./utils/autoloadSchemas')

module.exports = gql(autoloadSchemas(namespaces))
