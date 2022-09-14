// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

var isPalindrome = function(x) {
    if (x < 0) 
        return false
    if (x < 10)
        return true
    if (x % 10 === 0) 
        return false
    const reverse = x.toString().split('').reverse().join('')
    if(reverse == x){
        return true
    } else return false
};