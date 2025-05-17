function containsNearbyDuplicate(nums: number[], k: number): boolean {
    // to know if there's duplicates so am going to use hashmap , and to make sure that the distinct value is not bigger than K so am going to use pointer to know that 


    const hashMap:{ [key:number]:number  } = {};

    for(let  i = 0; i <=nums.length ; i++){
            const num = nums[i];

            if( hashMap[num] !== undefined && (i - hashMap[num]) <= k){
                return true 
            }

             hashMap[num] = i;
        
    }
    
    
      return false 

    
};