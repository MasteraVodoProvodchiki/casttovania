# CastToVania

[![CircleCI](https://circleci.com/gh/MasteraVodoProvodchiki/casttovania.svg?style=svg)](https://circleci.com/gh/MasteraVodoProvodchiki/casttovania)  
  
Cast your string to something another  
Maybe to string, maybe to number, maybe to array of numbers!  
Also supports booleans

## Installation
```bash
yarn add @masteravodoprovodchiki/casttovania

# if you use npm

npm i --save @masteravodoprovodchiki/casttovania
```

## Examples
```javascript
const cast = require('@masteravodoprovodchiki/casttovania')

const number = cast('1')            // will be 1
const number = cast('true')         // will be true
const number = cast('TRUE')         // will be true
const number = cast('TrUe')         // will be true
const number = cast('false')        // will be false
const string = cast('foo')          // will be 'foo'
const array0 = cast('foo,bar')      // will be ['foo', 'bar']
const array1 = cast('foo,1')        // will be ['foo', 1]
const array2 = cast('foo,')         // will be ['foo']
```
