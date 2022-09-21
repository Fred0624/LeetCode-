// Given a string s, return the number of segments in the string.

// A segment is defined to be a contiguous sequence of non-space characters.
// example:
// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

var countSegments = function(s) {
    return s.split(" ").filter(x => x !== "").length;
};