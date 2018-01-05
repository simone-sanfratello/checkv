'use strict'

const validate = require('./validate/')

// const log = require('log-segment')
// log.add({segments: lib.checkv.log})

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
      console.log('chekcv', 'no rules checking value', value)
      return true
    }

    // apply rules
    let _match = true
    for (const rule in rules) {
      if (
        !validate.number[rule] &&
        !validate.string[rule] &&
        !validate.array[rule] &&
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
        // string cases
        case 'isString':
        case 'isEmail':
          _match = _compare === validate.string[rule](value)
          break
        case 'isShorter':
        case 'isLonger':
          _match = validate.string[rule](value, _compare)
          break
        // object cases
        case 'isSet':
        case 'isObject':
        case 'isArray':
          _match = _compare === validate.object[rule](value)
          break
        case 'hasProperties':
        case 'isExactly':
        case 'isEnum':
          _match = validate.object[rule](value, _compare)
          break
        // array cases
        case 'isIn':
          _match = validate.array[rule](value, _compare)
          break
        // function cases
        case 'isFunction':
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
    console.warn('checkv', 'unknow rule', rule, 'checking value', value)
    return false
  }

  return check
}

module.exports = Check
