'use strict'

const number = {
  isNumber: function (value) {
    return typeof value === 'number'
  },
  isInteger: function (value) {
    return number.isNumber(value) && Number.isInteger(value)
  },
  isPositive: function (value) {
    return number.isNumber(value) && value >= 0
  },
  isEqual: function (value, than) {
    return number.isNumber(value) && value === than
  },
  isGreater: function (value, than) {
    return number.isNumber(value) && value > than
  },
  isLess: function (value, than) {
    return number.isNumber(value) && value < than
  },
  isGreaterOrEqual: function (value, than) {
    return number.isNumber(value) && value >= than
  },
  isLessOrEqual: function (value, than) {
    return number.isNumber(value) && value <= than
  }
}

module.exports = number
