// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

var isPerfectSquare = function(num) {
    return Number.isInteger(Math.sqrt(num))
};