function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    
    //  so now we need to return an array of the greater element and if that greater element dose not exit so we return -1 

    // in my haed there two ways to solve it , two pointers and using stack and compare them 
    let ans:number[] = []

    for( let i = 0 ; i < nums1.length ; i++){
        let found = false;
        let nextGreater = -1

        for ( let j = 0 ; j < nums2.length ; j ++ ){
            
            if( nums2[j] === nums1[i] ){
                found =  true;
            }

            if( found && nums2[j] > nums1[i]){
                nextGreater = nums2[j]
                break;
            }

        }
        ans.push(nextGreater)
    }
return ans;

};