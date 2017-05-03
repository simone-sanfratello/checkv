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
  },
  /**
   * @todo instance cases: Date, Regexp ...
   */
  isExactly: function (value, to) {
    if (typeof to !== typeof value) {
      return false
    }

    if (typeof to === 'object') {
      if (to.constructor.name !== value.constructor.name) {
        return false
      }

      if (to instanceof Array) {
        for (let i = 0; i < to.length; i++) {
          if (!object.isExactly(value[i], to[i])) {
            return false
          }
        }
        return true
      } else {
        log.warning('check', 'object.isExactly, unknown instance', to.constructor.name)
        return false
      }
    }

    // primitives
    return value === to
  }
}

module.exports = object
