function getConcatenation(nums: number[]): number[] {
    
    let ans:number [] = [];
    let n:number = nums.length;

    for ( let i= 0 ; i < nums.length ; i++){
        ans[i] = nums[i] 
        ans[i + n] = nums[i]
    }
    return ans;
};