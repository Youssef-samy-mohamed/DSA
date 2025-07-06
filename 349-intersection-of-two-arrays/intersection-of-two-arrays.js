/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// we need to get the element that both array intersect with or shared with 
// two pointers method 
//  first am gonna make an array that i will return the result in
// second am gonning to loop on each one and see what is the shard element 




var intersection = function(nums1, nums2) {
    let result = [];
     for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j] && !result.includes(nums1[i])) {
                result.push(nums1[i]);
            }
        }
    }

return result
};