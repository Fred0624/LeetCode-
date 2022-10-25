// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.


// Example 1:
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

// Example 2:
// Input: arr = [1,2]
// Output: false

// Example 3:
// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

var uniqueOccurrences = function(arr) {
    let map = new Map()
    for(let i = 0; i < arr.length; i++){
        map.set(arr[i], (map.get(arr[i]) + 1) || 1)
    }
    let set = new Set()
    for(let val of map.values()){
        //If the set already has it, return false
        if(set.has(val)){
            return false
        } else {
        //Otherwise add it
            set.add(val)
        }
    }
    return true
};