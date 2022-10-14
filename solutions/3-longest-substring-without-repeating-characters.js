// Given a string s, find the length of the longest substring without repeating characters.


// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
    let dis = 0
    for(let i = 0; i < s.length; i++){
        let sub = s[i]
        for(let j = i+1; j < s.length; j++){
// sub.indexOf(s[j]) === -1 means  s[j] not exist in the substring
            if (sub.indexOf(s[j]) !== -1)
            break
            else sub += s[j]
        }
        dis = Math.max(sub.length, dis)
            
    }
    return dis
};