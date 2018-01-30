# checkv

- [Installing](#installing)
- [Getting Started](#getting-started)
- [Validators](#validators)
  - [types](#types)
  - [number](#number)
  - [string](#string)
  - [object](#object)
  - [any](#any)

---

## Install

Note: this library is under development

````bash
$ npm i checkv --save
````

### Getting Started

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
``checkv`` function always return ``true`` or ``false``.

````js
checkv(input, validators): true | false
````

#### types

- _isSet_ : ``bool``  
check if input is set - it's ok if is not ``null`` or ``undefined``
````js
checkv(null, { isSet: true }) // return false
checkv(undefined, { isSet: true }) // return false
checkv(0, { isSet: true }) // return true
checkv('', { isSet: true }) // return true
````

- _isNumber_ : ``bool``  
check if input is a number
````js
checkv(0, { isNumber: true }) // return true
checkv(1, { isNumber: false }) // return false
checkv('Alice', { isNumber: true }) // return false
checkv('Alice', { isNumber: false }) // return true
````

- _isString_ : ``bool``  
check if input is a string
````js
checkv('Alice', { isString: true }) // return true
````

- _isObject_ : ``bool``  
check if input is an object
````js
checkv({}, { isObject: true }) // return true
checkv('Alice', { isObject: false }) // return true
````

- _isArray_ : ``bool``  
check if input is an array
````js
checkv([], { isArray: true }) // return true
checkv('Alice', { isArray: false }) // return true
````

- _isFunction_ : ``bool``  
check if input is a function
````js
checkv(f(){}, { isFunction: true }) // return true
````

#### number

- _isInteger_ : ``bool``  
check if input is an integer
````js
checkv(1, { isInteger: true }) // return true
checkv(1.1, { isInteger: true }) // return false
````

- _isPositive_ : ``bool``  
check if input is positive
````js
checkv(1, { isPositive: true }) // return true
checkv(-1, { isPositive: true }) // return false
````

- _isEqual_ : ``number``  
check if input is equal to ``number``  
Note: will be extend to other types
````js
checkv(1, { isEqual: 1 }) // return true
````

- _isGreater_ : ``number``  
check if input is greater than ``number``
````js
checkv(1, { isGreater: 0 }) // return true
````

- _isLess_ : ``number``  
check if input is less than ``number``
````js
checkv(1, { isLess: 0 }) // return false
````

- _isGreaterOrEqual_ : ``number``  
check if input is greater than ``number``
````js
checkv(1, { isGreaterOrEqual: 1 }) // return true
````

- _isLessOrEqual_ : ``number``  
check if input is greater than ``number``
````js
checkv(1, { isLessOrEqual: 2 }) // return true
````

#### string

- _isShorter_ : ``number``  
check if input is shorter than ``number``
````js
checkv('simone@braceslab.com', { isShorter: 3 }) // return false
````

- _isLonger_ : ``number``  
check if input is longer than ``number``
````js
checkv('simone@braceslab.com', { isLonger: 3 }) // return true
````

- _isEmail_ : ``bool``  
check if input is an email
````js
checkv('simone@braceslab.com', { isEmail: true }) // return true
````

- _isPinCode_ : ``bool``  
check if input is a pin code, means that contains only numbers
````js
checkv('12345123456', { isPinCode: true }) // return true
checkv('1', { isPinCode: true }) // return true
checkv('1+39', { isPinCode: true }) // return false
checkv('1 2 3', { isPinCode: true }) // return false
````

- _isPhone_ : ``bool``  
check if input is a phone number, means that:
  - contains only numbers or spaces or dots
  - may starts with +
  - is longer at least 3 numbers
````js
checkv('345123456', { isPhone: true }) // return true
checkv('+39 345.123 456', { isPhone: true }) // return true
checkv('34', { isPhone: true }) // return false
checkv('+3.4', { isPhone: true }) // return false
checkv('187', { isPhone: true }) // return true
````

- _isHex_ : ``bool``  
check if input is an hex, means that contains only alphanumeric chars (a-9,a-f)
````js
checkv('fa000e46', { isHex: true }) // return true
checkv('FFAA123', { isHex: true }) // return true
checkv('#ff 39 aa', { isHex: true }) // return false
checkv('abcdefgh', { isHex: true }) // return false
````

- _isIn_ : ``array|string``  
check if input contains value
````js
checkv('Frank', { isIn: ['Frank', 'Paul', 'Alex', 'Maurice'] }) // return true
````

#### object

- _hasProperties_ : ``array``  
check if input, as object, has all properties in ``array``  
````js
checkv({a: 1}, { hasProperties: ['a'] }) // return true
````

- _isEnum_ : ``object``  
check if input is en element of the `object`` as enum
````js
const enum = { A: 0, B: 1 }
let a = enum.A
checkv(a, { isEnum: enum }) // return true
````

#### any

- _isExactly_ : ``*``  
check if input is exactly ``*`` - like deep strict equal
````js
checkv(1, { isExactly: 1) // return true
checkv({a: 1}, { isExactly: {a: 1 }}) // return true
checkv(['a', 1], { isExactly: ['a', 1] }) // return true
````
