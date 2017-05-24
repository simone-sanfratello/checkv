'use strict'

const string = {
  isString: function (value) {
    return typeof value === 'string'
  },
  isShorter: function (value, than) {
    return string.isString(value) && value.length < than
  },
  isLonger: function (value, than) {
    return string.isString(value) && value.length > than
  }
}

module.exports = string
