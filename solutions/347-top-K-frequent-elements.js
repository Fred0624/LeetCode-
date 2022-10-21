// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.


// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

var topKFrequent = function(nums, k) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], (map.get(nums[i])+1) || 1)
    }
    let result = [...map.keys()].sort((a,b) =>{
        if(map.get(a) === map.get(b)) {
        return a - b
        } else return map.get(b) - map.get(a) 
    }).slice(0,k)
    return result
};