function containsDuplicate(nums: number[]): boolean {
    const countMap: { [key: number]: number } = {};

    for (const num of nums) {
        if (countMap[num]) {
            return true;
        }
        countMap[num] = 1;
    }

    return false;
}