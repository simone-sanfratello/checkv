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

### Validators

You can combine validators each others.  
Some validators implicitly perform others, for example ``isPositive`` also perform ``isNumber``.

#### types

- isSet: ``bool``  
check if input is set - it's ok if is not ``null`` or ``undefined``
````js
checkv(null, { isSet: true }) // return false
checkv(undefined, { isSet: true }) // return false
checkv(0, { isSet: true }) // return true
checkv('', { isSet: true }) // return true
````

- isNumber: ``bool``  
check if input is a number
````js
checkv(0, { isNumber: true }) // return true
checkv(1, { isNumber: false }) // return false
checkv('Alice', { isNumber: true }) // return false
checkv('Alice', { isNumber: false }) // return true
````

- isString: ``bool``  
check if input is a string
````js
checkv('Alice', { isString: true }) // return true
````

- isObject: ``bool``  
check if input is an object
````js
checkv({}, { isObject: true }) // return true
checkv('Alice', { isObject: false }) // return true
````

- isArray: ``bool``  
check if input is an array
````js
checkv([], { isArray: true }) // return true
checkv('Alice', { isArray: false }) // return true
````

- isFunction: ``bool``  
check if input is an object
````js
checkv(f(){}, { isFunction: true }) // return true
````

#### number

- isInteger: ``bool``  
check if input is an integer
````js
checkv(1, { isInteger: true }) // return true
checkv(1.1, { isInteger: true }) // return false
````

- isPositive: ``bool``  
check if input is positive
````js
checkv(1, { isPositive: true }) // return true
checkv(-1, { isPositive: true }) // return false
````

- isEqual: ``number``  
check if input is equal to ``number``  
Note: will be extend to other types
````js
checkv(1, { isEqual: 1 }) // return true
````

- isGreater: ``number``  
check if input is greater than ``number``
````js
checkv(1, { isGreater: 0 }) // return true
````

- isLess: ``number``  
check if input is less than ``number``
````js
checkv(1, { isLess: 0 }) // return false
````

- isGreaterOrEqual: ``number``  
check if input is greater than ``number``
````js
checkv(1, { isGreaterOrEqual: 1 }) // return true
````

- isLessOrEqual: ``number``  
check if input is greater than ``number``
````js
checkv(1, { isLessOrEqual: 2 }) // return true
````

#### string

- isEmail: ``bool``  
check if input is an email
````js
checkv('simone@braceslab.com', { isEmail: true }) // return true
````

- isShorter: ``number``  
check if input is shorter than ``number``
````js
checkv('simone@braceslab.com', { isShorter: 3 }) // return false
````

- isLonger: ``number``  
check if input is shorter than ``number``
````js
checkv('simone@braceslab.com', { isLonger: 3 }) // return true
````

- isIn: ``array|string``  
check if input contains value
````js
checkv('Frank', { isIn: ['Frank', 'Paul', 'Alex', 'Maurice'] }) // return true
````

#### object

- hasProperties: ``array``  
check if input, as object, has all properties in ``array``  
````js
checkv({a: 1}, { hasProperties: ['a'] }) // return true
````

- isEnum: ``object``  
check if input is en element of the `object`` as enum
````js
const enum = { A: 0, B: 1 }
let a = enum.A
checkv(a, { isEnum: enum }) // return true
````

#### any

- isExactly: ``*``  
check if input is exactly ``*`` - like deep strict equal
````js
checkv(1, { isExactly: 1) // return true
checkv({a: 1}, { isExactly: {a: 1 }}) // return true
checkv(['a', 1], { isExactly: ['a', 1] }) // return true
````

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
