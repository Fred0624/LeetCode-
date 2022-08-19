// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

const longestCommonPrefix = function(strs) {
    // I can just compare the first index's letter with each of the others
    let sameString = ''
    // Continually add to this same string as long as they're all the same
    for(let i =0; i < strs[0].length; i++){
        let letter = strs[0][i]
        // Iterate through the rest of strs and see if it ever doesn't match that letter
        for(let j =1; j < strs.length; j++){
            if(letter !== strs[j][i])
            return sameString
        }
        sameString += letter
    }
    return sameString
}