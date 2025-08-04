// all we need to do just found the god pair 
// how do i find them  , if |nums[i] - nums[j]| == k 

// i - j == k                  ||               j - i == k



// nums[i] - nums[j] === k → nums[j] === nums[i] - k

// nums[j] - nums[i] === k → nums[j] === nums[i] + k

// so am thinking to use hashTable to store all the values in 

// {
//     1:1,
//     2:2,
//     3:2,
//     4:1
// } k = 1 





// {
//     1:2,
//      2:2,

// }




var countKDifference = function (nums, k) {
    // k = 1
    // nums = [5 ,4 ,1, 2, 2, 1 ];
    let hashMap = {}
    let count = 0

    for( let num of nums){

                count += (hashMap[num - k] || 0) + (hashMap[num + k] || 0);
// to make sure if we saw this number before or no 
                hashMap[num] = (hashMap[num] || 0) + 1;


    }   
    // console.log(hashMap)

    //     console.log(count);a

    return count


};

// countKDifference()