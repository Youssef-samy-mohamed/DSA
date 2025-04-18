function countGood(nums: number[], k: number): number {
    let left = 0;
    let pairs = 0;
    let total = 0;
    const freq = new Map<number, number>();

    for (let right = 0; right < nums.length; right++) {
        const num = nums[right];
        const prevFreq = freq.get(num) || 0;
        pairs += prevFreq;
        freq.set(num, prevFreq + 1);

        while (pairs >= k) {
            total += nums.length - right;
            const leftNum = nums[left];
            const leftFreq = freq.get(leftNum) || 0;
            pairs -= leftFreq - 1;
            freq.set(leftNum, leftFreq - 1);
            left++;
        }
    }

    return total;
}