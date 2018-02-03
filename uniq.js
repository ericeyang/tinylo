/**
 * 
 * 
 * @param {any} arr 
 * @returns 
 */
function uniq (arr) {
  return [...new Set(arr)]
}

export default uniq