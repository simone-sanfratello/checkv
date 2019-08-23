# *** DEPRECATED ***

This module is deprecated, do not use

---

# checkv

javascript idiomatic validator

## Purpose

A readable way to validate data

## Install

````bash
$ npm i checkv
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
checkv('+39 345 123 34 56', { isPhone: true }) // return true
checkv('ff39aa345bc12b3e34d56d', { isHex: true }) // return true
checkv('Frank', { isIn: ['Frank', 'Paul', 'Alex', 'Maurice'] }) // return true

````

## Documentation

See [documentation](./doc/README.md) for further informations.

---

## License

The MIT License (MIT)

Copyright (c) 2017-2018, [braces lab](https://braceslab.com)

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
