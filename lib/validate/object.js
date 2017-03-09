'use strict'

const log = require('log-segment')

const object = {
  isObject: function (value) {
    return value && typeof value === 'object'
  },
  /**
   * implicitly check isObject
   */
  hasProperties: function (value, properties) {
    if (!properties) {
      log.warning('check', 'object.hasProperties, missing properties')
    }
    if (!properties || !object.isObject(value)) {
      return false
    }
    for (let i = 0; i < properties.length; i++) {
      if (!value.hasOwnProperty(properties[i])) {
        return false
      }
    }
    return true
  }
}

module.exports = object
