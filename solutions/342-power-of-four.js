// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

// n = 4^x ==> log4(n) = x, if x is an integer, so it is true

var isPowerOfFour = function(n) {
    return Number.isInteger(Math.log(n) / Math.log(4))
    //return Number.isInteger(Math.log4(n))
};