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
  }
}

module.exports = number
