// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.


// Example 1:
// Input: nums = [3,2,3]
// Output: [3]

// Example 2:
// Input: nums = [1]
// Output: [1]

// Example 3:
// Input: nums = [1,2]
// Output: [1,2]

var majorityElement = function(nums) {
    let map = new Map()
    let arr = []
    let len = Math.floor(nums.length / 3)
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], (map.get(nums[i])+1) || 1)
    }
    for(let [key, value] of map){
        if(value > len){
            arr.push(key)
        }
    }
    return arr
};