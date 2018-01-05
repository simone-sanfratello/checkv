# checkv

[![NPM Version](http://img.shields.io/npm/v/checkv.svg?style=flat)](https://www.npmjs.org/package/checkv)
[![NPM Downloads](https://img.shields.io/npm/dm/checkv.svg?style=flat)](https://www.npmjs.org/package/checkv)

[![JS Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

javascript idiomatic validator

## Purpose

A readable way to validate data

## Install

Note: this module is on development

````bash
$ npm i checkv --save
````

### Quick start

Use

````js
check(input, validators): true | false
````

````js
const checkv = require('checkv')

checkv(0, { isNumber: true }) // return true
checkv('Alice', { isNumber: false }) // return true
checkv(2, { isGreater: 1, isLessOrEqual: 3 }) // return true
checkv('simone@braceslab.com', { isEmail: true }) // return true
checkv('Frank', { isIn: ['Frank', 'Paul', 'Alex', 'Maurice'] }) // return true

````

## Documentation

See [documentation](./doc/README.md) for further informations.

## TODO

- [ ] browser version
- [ ] Date
  - _isBefore_ : Date
  - _isAfter_ : Date
  - _isSameDay_ : Date compare trunc at date

---

## License

The MIT License (MIT)

Copyright (c) 2017, [braces lab](https://braceslab.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
