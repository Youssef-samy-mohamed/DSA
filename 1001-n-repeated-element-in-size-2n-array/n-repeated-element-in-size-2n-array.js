/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    if( !nums) return 0


    // i will check how many times the element appears 

    // let freq = {}
    // for( let i = 0 ; i < nums.length ; i++ ){
    //     freq[nums[i]] = ( freq[nums[i]] || 0 ) + 1 
    // }

    //   let maxKey = null;
    // let maxValue = -Infinity;

    // for (const key in freq) {
    //     if (freq[key] > maxValue) {
    //         maxValue = freq[key];
    //         maxKey = Number(key);
    //     }
    // }

    // return maxKey;



    let seen = new Set()


    for( const num of nums ){
        if( seen.has(num) ){
            return num 
        }
        seen.add(num)
    }


};