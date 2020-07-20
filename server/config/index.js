const namespaces = require('./namespaces')
const { config, dev } = require('./env')
const { modulesFolder, rootFolder } = require('./paths')

/** Export all backend config */
module.exports = {
  modulesFolder,
  rootFolder,
  namespaces,
  config,
  dev
}
