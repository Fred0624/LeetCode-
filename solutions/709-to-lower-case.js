// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// The trick here that in ASCII the distance between uppercased and lowercased letter is 32.
// For example 'A' is 65 while 'a' is 65 + 32 = 97.

var toLowerCase = function(s) {
    let lower = ''

    for (let i = 0; i < s.length; i++){
        let ascii = s.charCodeAt(i)
        if (ascii >= 65 && ascii <= 90) {
            lower += String.fromCharCode(ascii + 32)
        } else {
            lower += s.charAt(i)
        }
    }
    return lower
};