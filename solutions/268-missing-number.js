// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

var missingNumber = function(nums) {
    const len = nums.length
    const sum1 = (len*(len+1))/2
    const sum2 = nums.reduce((a,b) => a + b, 0)
    missNum = sum1 - sum2
    return missNum
};