'use strict'

const lib = require('./lib/lib')
const Check = require('./lib/Check')

const check = new Check()
check.lib = lib

module.exports = check
