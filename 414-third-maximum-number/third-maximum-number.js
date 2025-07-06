/**
 * @param {number[]} nums
 * @return {number}
 */

// we gonae make unique values first 
//  then sort it 
//  then our conditions 



var thirdMax = function(nums) {

    const unique = [... new Set(nums)]

    unique.sort( ( a, b ) => b - a)

    return unique.length >= 3 ? unique[2] : unique[0]
   
};












