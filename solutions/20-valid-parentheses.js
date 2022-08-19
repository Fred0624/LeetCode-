// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// 1.Open brackets must be closed by the same type of brackets.
// 2.Open brackets must be closed in the correct order.

var isValid = function(s) {
    if(s.length%2 !== 0) return false
    // {}. (). {()}, [{}]
    let stillOpen = [];
    // if it's an opening, add it to the arry. If it's a closing, see if it's valid or not
    for(let i =0; i < s.length; i++){
        if(s[i] === ')' && stillOpen[stillOpen.length -1] === '(')
            stillOpen.pop();
        else if(s[i] === ']' && stillOpen[stillOpen.length -1] === '[')
            stillOpen.pop();
        else if(s[i] === '{' && stillOpen[stillOpen.length -1] === '}')
            stillOpen.pop();
        else {
            stillOpen.push(s[i])
        }
    }
    return !stillOpen.length;
}