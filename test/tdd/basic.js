'use strict'

const check = require('../../')
const tap = require('tap')
// const faker = require('faker')
const log = require('log-segment')

log.set({
  enabled: {
    segments: '*',
    levels: '*'
  }
})

const samples = {
  number: [
    {
      value: null,
      rules: { isNumber: true },
      result: false
    },
    {
      value: undefined,
      rules: { isNumber: true },
      result: false
    },
    {
      value: 0,
      rules: { isNumber: true },
      result: true
    },
    {
      value: 1,
      rules: { isInteger: true },
      result: true
    },
    {
      value: 2,
      rules: { isInteger: true, isPositive: true },
      result: true
    },
    {
      value: 3,
      rules: { isInteger: false, isPositive: true },
      result: false
    },
    {
      value: 4,
      rules: { isPositive: true },
      result: true
    },
    {
      value: -1,
      rules: { isInteger: true },
      result: true
    },
    {
      value: -1,
      rules: { isEqual: -1 },
      result: true
    },
    {
      value: 100,
      rules: { isEqual: 99 },
      result: false
    },
    {
      value: 100,
      rules: { isGreater: 99 },
      result: true
    },
    {
      value: 1,
      rules: { isGreater: 2 },
      result: false
    },
    {
      value: 9,
      rules: { isLess: 88 },
      result: true
    },
    {
      value: 77,
      rules: { isLess: 66 },
      result: false
    },
    {
      value: 1,
      rules: { isGreaterOrEqual: 1 },
      result: true
    },
    {
      value: 1,
      rules: { isGreaterOrEqual: 2 },
      result: false
    },
    {
      value: 2,
      rules: { isLessOrEqual: 2 },
      result: true
    },
    {
      value: 2,
      rules: { isLessOrEqual: 3 },
      result: true
    }
  ],
  object: [
    {
      value: null,
      rules: { isObject: true },
      result: false
    },
    {
      value: undefined,
      rules: { isObject: true },
      result: false
    },
    {
      value: {},
      rules: { isObject: true },
      result: true
    },
    {
      value: { p1: 'a' },
      rules: { isObject: true, hasProperties: [ 'p1' ] },
      result: true
    },
    {
      value: { p1: null },
      rules: { isObject: true, hasProperties: [ 'p1' ] },
      result: true
    },
    {
      value: { p1: null },
      rules: { isObject: true, hasProperties: [ 'p2' ] },
      result: false
    },
    {
      value: 1,
      rules: { isExactly: 1 },
      result: true
    },
    {
      value: 'a',
      rules: { isExactly: 'a' },
      result: true
    },
    {
      value: 1,
      rules: { isExactly: '1' },
      result: false
    },
    {
      value: [0, 1, 2, 3],
      rules: { isExactly: [0, 1, 2, 3] },
      result: true
    },
    {
      value: [0, 1, 2, 3],
      rules: { isExactly: ['0', '1', '2', '3'] },
      result: false
    },
    {
      value: [0, '1', function () {}],
      rules: { isExactly: [0, '1', function () {}] },
      result: false
    }
  ],
  // function
  function: [
    {
      value: null,
      rules: { isObject: true },
      result: false
    },
    {
      value: undefined,
      rules: { isObject: true },
      result: false
    },
    {
      value: function () {},
      rules: { isFunction: true },
      result: true
    },
    {
      value: {},
      rules: { isFunction: true },
      result: false
    }

  /* 
  @todo
  {
  value: function () { },
  rules: { isFunction: true, returnPromise: false },
  result: true
  },
  {
  value: function () {
  return new Promise((resolve, reject) => { })
  },
  rules: { isFunction: true, returnPromise: true },
  result: true
  }*/
  ],
  misc: [
    {
      value: 0,
      rules: { isAwesome: true },
      result: false
    }
  ]
}

for (const section in samples) {
  tap.test(section, (test) => {
    samples[section].forEach((unit) => {
      let _f = unit.result ? test.true : test.false
      _f(check(unit.value, unit.rules), `check(${unit.value}, ${JSON.stringify(unit.rules)})`)
    })
    test.end()
  })
}
