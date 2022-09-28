// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

var isPalindrome = function(s) {
    let s1 = s.replace(/[^a-zA-Z0-9 ]/g, '')
    let s2 = s1.toLowerCase().split(' ').join('')
    let reverse = s2.split('').reverse().join('')
    return s2 == reverse
};