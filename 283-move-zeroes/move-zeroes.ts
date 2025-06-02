/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {

    // define the problem 
    // we need to modify the given array 

    // analyze the problem 
    // the modifying way is to put the zeros at the end of the array 

    // generate solutinos 
    //  i need to move the the non zers to the left and by default the the other numbers will be in the right which is needed 

    let left = 0; // pointer for place non-zero

    for( let right = 0 ; right < nums.length ; right++) {
        if(nums[right] != 0){
              let temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp;
        left++; // to move the left forward 
        }
      
    }


    
    
};