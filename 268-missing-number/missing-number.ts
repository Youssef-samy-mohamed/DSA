function missingNumber(nums: number[]): number {
    // define the problem 
    // so we have distinct numbers in the array [0, n] , i wanna return only the missing nubmers in the array
    // "find the missing index"

    // analyze the problem 
    // we count how many numbers in the array and according to that we know what is missing like first exam 
    // n = 3 so we know that we have index 0 , 1 , 2 ,3


    // let's generate a solution 
    // will make pointers to scout the missing index and get it's value

    const numsSet = new Set(nums);
    for( let i = 0 ; i <= nums.length ; i++ ){
        if( !numsSet.has(i)){
            return i;
        }
    }

};