'use strict'

const log = require('log-segment')

const lib = require('./lib')
const validate = require('./validate/')

log.add({
  segments: lib.check.log
})

/**
 * Rules

 */

const Check = function () {
  /**
   * @param {*} value
   * @param {Rules} rules
   * @return boolean
   */
  function check (value, rules) {
    // check rules
    if (!rules || Object.keys(rules).length < 1) {
      log.warning('check', 'no rules checking value', value)
      return true
    }

    // apply rules
    let _match = true
    for (const rule in rules) {
      if (
        !validate.number[rule] &&
        !validate.object[rule] &&
        !validate.function[rule]
        ) {
        return __unknownRule(value, rule)
      }
      let _compare = rules[rule]
      switch (rule) {
        // number cases
        case 'isNumber':
        case 'isInteger':
        case 'isPositive':
          _match = _compare === validate.number[rule](value)
          break
        case 'isEqual':
        case 'isGreater':
        case 'isLess':
        case 'isGreaterOrEqual':
        case 'isLessOrEqual':
          _match = validate.number[rule](value, _compare)
          break
        // object cases
        case 'isObject':
          _match = _compare === validate.object[rule](value)
          break
        case 'isExactly':
          _match = validate.object[rule](value, _compare)
          break
        case 'hasProperties':
          _match = validate.object[rule](value, _compare)
          break
        // function cases
        case 'isFunction':
        // case 'returnPromise':
          _match = _compare === validate.function[rule](value)
          break
        default:
          return __unknownRule(value, rule)
      }
      if (!_match) {
        return false
      }
    }

    return true
  }

  function __unknownRule (value, rule) {
    log.warning('check', 'unknow rule', rule, 'checking value', value)
    return false
  }

  return check
}

module.exports = Check
