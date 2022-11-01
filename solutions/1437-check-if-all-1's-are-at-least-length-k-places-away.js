// Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.



// Example 1:
// Input: nums = [1,0,0,0,1,0,0,1], k = 2
// Output: true
// Explanation: Each of the 1s are at least 2 places away from each other.

// Example 2:
// Input: nums = [1,0,0,1,0,1], k = 2
// Output: false
// Explanation: The second 1 and third 1 are only one apart from each other.

var kLengthApart = function(nums, k) {
    let arr = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            arr.push(i)
        }
    }
    for(let i = 0; i < arr.length; i ++){
        if(arr[i+1] - arr[i] -1 < k)
            return false
    }
    return true
};