// we need to make sure that everySingle number appears once 
// we need to return those number that apeears more than one time 

/**
 * @param {number[]} nums
 * @return {number[]}
 */


var getSneakyNumbers = function (nums) {
  return nums.filter((num, index) => nums.indexOf(num) !== index);
};



// console.log(getSneakyNumbers([1, 2, 3, 1, 2, 4])); // [1, 2]
