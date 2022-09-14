// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
    // nested for loop where we check if the numbers at the two indices add up to the target
    for (let i =0; i < nums.length; i++) {
        for (let j =0; j < nums.length; j++) {
            if (i != j){
                if(nums[i] + nums[j] === target){
                    return[i, j]
                }
            }
        }
    }
}
