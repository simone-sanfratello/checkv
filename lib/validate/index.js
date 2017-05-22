'use strict'

const validate = {
  function: require('./function'),
  number: require('./number'),
  string: require('./string'),
  object: require('./object'),
  array: require('./array')
}

module.exports = validate
