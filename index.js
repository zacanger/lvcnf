const _ = require('lodash')

class Config {
  constructor (initalConfig = {}) {
    this.config = initalConfig
  }

  set (path, value) {
    _.set(this.config, path, value)
  }

  get (path) {
    return path ? _.get(this.config, path) : this.config
  }

  delete (path) {
    delete this.config[path]
  }

  overwrite (newConfig) {
    this.config = newConfig
  }

  merge (newConfig) {
    this.config = _.merge(this.config, newConfig)
  }
}

module.exports = Config
