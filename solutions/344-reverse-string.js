// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

var reverseString = function(s) {
    let r = s.reverse()
    return r
};

// var reverseString = function(s) {
//     // Loop through 1/2 of s
//     for (let i = 0; i < s.length / 2; i++) {
//         // Save current val
//         let temp = s[i];
        
//         // Replace with end of array char
//         s[i] = s[s.length - 1 - i];
        
//         // Replace end of array letter with current val
//         s[s.length - 1 - i] = temp;
//     }
// };