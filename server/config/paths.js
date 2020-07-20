const path = require('path')

/** @return {String} modules Folder folder path **/
const modulesFolder = () => path.join(rootFolder(), 'modules')

/** @return {String} root folder  path **/
const rootFolder = () => path.dirname(require.main.filename || process.mainModule.filename)

module.exports = {
  modulesFolder,
  rootFolder
}
