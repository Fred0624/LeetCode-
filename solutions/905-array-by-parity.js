// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

// example
// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

var sortArrayByParity = function(nums) {
    let odd = []
    let even = []
    for (let i = 0; i < nums.length; i++){
        if (nums[i]%2 != 0){
            odd.push(nums[i]) 
        } else {
            even.push(nums[i])
        }
    }
    return even.concat(odd)
};

// also can code this way:
// var sortArrayByParity = function(A) {
//     return [...A.filter(v => v % 2 === 0), ...A.filter(v => v % 2 !== 0)];
// };