'use strict'

const array = {
  isIn: function (value, values) {
    try {
      return values.indexOf(value) !== -1
    } catch (e) {
      return false
    }
  }
}

module.exports = array
