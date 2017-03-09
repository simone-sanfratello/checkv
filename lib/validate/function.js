'use strict'

const f = {
  isFunction: function (value) {
    return typeof value === 'function'
  },
  /**
   * implicitly check isFunction
   * @todo using esprima?
   */
  returnPromise: function (value) {
    if (!f.isFunction(value)) {
      return false
    }
    return true
  }
}

module.exports = f
