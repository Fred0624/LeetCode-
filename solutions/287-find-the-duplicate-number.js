// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

var findDuplicate = function(nums) {
    let arr = nums.sort((a, b) => a - b)
    for(let i=0;i<nums.length;i++){
            if(arr[i] === arr[i+1]){
                return arr[i]
            }
        }
};


// this solution is too slow
// var findDuplicate = function(nums) {
//     for (i=0; i<nums.length; i++){
//         for (j=0; j<nums.length; j++){
//             if(nums[i] === nums[j] && i != j){
//                 return nums[i]
//             }
//         }
//     }
//     return nums[i]
// };