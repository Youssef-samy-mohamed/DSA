/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if ( n === 0 ) return 
    if ( m === 0 || nums2[n-1] >= nums1[m-1]) {
        nums1[m+n-1] = nums2[n-1]
        merge(nums1 , m , nums2 , n-1)
    }else {
        nums1[m+n-1] = nums1[m-1]
        merge(nums1 , m-1 , nums2 , n)
    }

    
};