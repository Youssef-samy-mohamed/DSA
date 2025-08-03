/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    let freq = {};


//  to see the frequent for each element 
    for (let num of nums) {
      freq[num] = (freq[num] || 0) + 1;
    }

// Input: [1, 1, 2, 2, 2]
// freq = {
//   1: 2,
//   2: 3
// }


// if the number is odd so there's no way to have a pair
    for( let key in freq ){ 
        if( freq[key] % 2 !== 0){
            return false 
        }
    }

    return true;

};
