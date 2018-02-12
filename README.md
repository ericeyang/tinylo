# tinylo

Tiny lodash library

## Usage

### isPrimitive

Checks if value is primitive.

```js
const arr = [1, 2, 2, 4, 5, 4, 3]
console.log(isPrimitive(arr))

// false
```

### pick

Creates an object composed of the picked object properties.

```js
const obj = { a: 1, b: 2, c: 3 }
const newObj = pick(obj, ['a', 'c'])

// { a: 1, c: 3 }
```

### uniq

Creates a duplicate-free version of an array.

```js
const arr = [1, 2, 2, 4, 5, 4, 3]
const uniqArr = uniq(arr)

// [1, 2, 4, 5, 3]
```
