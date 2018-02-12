/**
 * Checks if value is primitive.
 * 
 * @param {any} value 
 * @returns {boolean}
 */
function isPrimitive(value) {
  return (
    typeof value === 'number' ||
    typeof value === 'string' ||
    typeof value === 'boolean' ||
    typeof value === 'symbol' ||
    typeof value === 'undefined' ||
    value === null
  )
}

export default isPrimitive
