// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.


// Example 1:

// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

var firstUniqChar = function(s) {
    let map = new Map()
    let result = -1
    for(let i = 0; i < s.length; i++){
        map.set(s[i], ((map.get(s[i]))+1 || 1))
    }
    for (let i = 0; i < s.length; i++){
        if(map.get(s[i]) === 1)
            return result = i
    }
    return result
};