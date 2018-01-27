/**
 * Creates an object composed of the picked object properties.
 *
 * @since 1.0.0
 * @param {Object} obj The source object
 * @param {Array} paths The property paths to pick
 * @returns {Object} Returns the new object
 * @example
 *
 * const obj = { a: 1, b: 2, c: 3 }
 * const newObj = pick(obj, [a, c])
 *
 * // { a: 1, c: 3 }
 */
function pick (obj, paths) {
  if (obj === null) {
    return {}
  }
  if (typeof paths === 'number' || typeof paths === 'string') {
    paths = [paths]
  }
  return paths.reduce((iter, val) => val in obj && (iter[val] = obj[val]), {})
}

export default pick
