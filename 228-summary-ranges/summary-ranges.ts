function summaryRanges(nums: number[]): string[] {
    //  so let me define the problem first 
    //  so i wanna return a list and that list has it's structure which is , id depends on the sequnce so 
    // i think it's the pointer is the best to use to make sure when to store the valuse in the new array 
        // two pointers 

      const result: string[] = [];

    if (nums.length === 0) return result;

    let start = nums[0];

    for (let i = 1; i <= nums.length; i++) {

        if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
            
            if (start === nums[i - 1]) {
                result.push(`${start}`);
            } else {
                result.push(`${start}->${nums[i - 1]}`);
            }

            // Start a new range if not at the end
            if (i < nums.length) {
                start = nums[i];
            }
        }
    }

    return result;
}