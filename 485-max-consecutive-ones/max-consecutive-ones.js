/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
 let maxOnes = 0 
 let currentOnes = 0 

    for( let num of nums ){

        if(num === 1 ){
            currentOnes++;
            maxOnes = Math.max(maxOnes , currentOnes)
        }else {
            currentOnes = 0
        }

    }
    return maxOnes;

};