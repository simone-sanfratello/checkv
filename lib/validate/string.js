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
    // eslint-disable-next-line
    return (/^[\w\.-]+@[\w\.-]+$/i).test(value)
  },
  isPinCode: function (value) {
    if (!value || !string.isString(value)) {
      return false
    }
    return (/^[\d]+$/).test(value)
  },
  isPhone: function (value) {
    if (!value || !string.isString(value) || !string.isLonger(value, 2)) {
      return false
    }
    if ((/^\+?[\d .]+$/).test(value)) {
      return value.replace(/[+ .]/g, '').length > 2
    }
    return false
  },
  isHex: function (value) {
    if (!value || !string.isString(value)) {
      return false
    }
    return (/^[\da-f]+$/i).test(value)
  }
}

module.exports = string
