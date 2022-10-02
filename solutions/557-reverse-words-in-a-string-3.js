// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.



// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

var reverseWords = function(s) {
    // 1. Split the string into an array of words
    let seperate = s.split(' ')
    // 2. Reverse the characters in each individual word
    for (let i = 0; i < seperate.length; i++){
        seperate[i] = seperate[i].split('').reverse().join('')
    }
    // 3. Return the recombined string
    return seperate.join(' ')
};