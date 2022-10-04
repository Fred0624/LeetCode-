// Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.

// Note that the letters wrap around.

// For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.


// Example 1:
// Input: letters = ["c","f","j"], target = "a"
// Output: "c"

// Example 2:
// Input: letters = ["c","f","j"], target = "c"
// Output: "f"

// Example 3:
// Input: letters = ["c","f","j"], target = "d"
// Output: "f"

var nextGreatestLetter = function(letters, target) {
    let arr = []
    for (let i = 0; i < letters.length; i++){
        if(letters[i]>target){
            arr.push(letters[i])
        }
    }
    let sorted = arr.sort()
    if (sorted.length != 0){
        return sorted[0]
    } else {
        return letters[0]
    }
};