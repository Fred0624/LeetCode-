// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

var addDigits = function(num) {
    if(isNaN(num) || num === 0)
    return num
    if (num < 10)
    return num
    if(num % 9 === 0){
        return 9
    } else {
        return num % 9
    }
};