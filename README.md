# tinylo

Tiny lodash library

## Usage

### pick

Creates an object composed of the picked object properties.

```js
const obj = { a: 1, b: 2, c: 3 }
const newObj = pick(obj, ['a', 'c'])

// { a: 1, c: 3 }
```