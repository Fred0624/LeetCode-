// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// example 
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"

var reverseStr = function(s, k) {
    if(s.length === 1) return s
    if(k === 1) return s
    let arr = []
    for (let i = 0; i < s.length; i+= 2*k){
        let reverseOne = s.slice(i, i+k)
        let reverse = reverseOne.split('').reverse().join('')
        let notReverse = s.slice(i+k, i+2*k)
        arr.push(reverse,notReverse)
    }
    return(arr.join(''))
};