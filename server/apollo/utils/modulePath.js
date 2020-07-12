const path = require('path')
const { modulesFolder } = require('../../config')

/**
 * Resolve a module namespace to a full absolute path.
 * @var {String} module namespace
 * @return {String} modulePath
 */
module.exports = (module) => {
  const arr = module.split('/')
  let modulePath = path.join(modulesFolder(), module, module)
  if (arr.length !== 1) {
    modulePath = path.join(modulesFolder(), module, arr[arr.length - 1])
  }
  return modulePath
}
