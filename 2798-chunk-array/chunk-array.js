/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

// i have an arary [] , and newArray that have a size for all the elements 
// am going to build a temp array until we reach the size that is needed


// this is another solutions and better one 

var chunk = function(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
};