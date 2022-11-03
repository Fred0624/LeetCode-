// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).


// Example 1:
// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].

// Example 2:
// Input: low = 8, high = 10
// Output: 1
// Explanation: The odd numbers between 8 and 10 are [9].

var countOdds = function(low, high) {
    // both even :4 12 ->5,7,9,11-  4: diff/2
    //even odd : 4 13  -> 5,7,9,11,13 - 5: Math.floor(diff/2)+1
    //odd even : 3 12  ->3,5,7,9,11  - 5 : floor(diff/2)+1 - same a s prev
    //both odd : 3 13  -> 3,5,7,9,11,13- 6:floor(diff/2)+1 -same
    //0 13. -> 1,3,5,7,9,11,13 - 7  test case 
    if(low%2 === 0 && high%2 === 0){
        return (high - low)/2
    } else{
        return Math.floor((high - low)/2) + 1
    }
};