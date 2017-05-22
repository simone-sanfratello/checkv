'use strict'

const string = {
  isString: function (value) {
    return typeof value === 'string'
  },
  isShorterThan: function (value, than) {
    return string.isString(value) && value.length < than
  },
  isLongerThan: function (value, than) {
    return string.isString(value) && value.length > than
  }
}

module.exports = string
