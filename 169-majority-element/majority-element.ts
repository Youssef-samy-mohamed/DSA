function majorityElement(nums: number[]): number {
    const countMap: { [key: number]: number } = {};
    const majorityCount = Math.floor(nums.length / 2);

    for (const num of nums) {
        countMap[num] = (countMap[num] || 0) + 1;

        if (countMap[num] > majorityCount) {
            return num;
        }
    }
// hashmap // index signture all the way :)
    return -1;
}
