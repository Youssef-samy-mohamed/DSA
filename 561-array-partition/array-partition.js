var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);

    let sum = 0;

    for (let i = 0; i < nums.length; i += 2) { // كل مرة i بيقف على أول عنصر في الزوج، وهو دايمًا الـ minimum بعد sorting
        sum += nums[i];
    }

    return sum;
};