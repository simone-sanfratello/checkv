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
  },
  isEmail: function (value) {
    if (!value || !string.isString(value)) {
      return false
    }
    return (/^[\w\.-]+@[\w\.-]+$/i).test(value)
  }
}

module.exports = string
