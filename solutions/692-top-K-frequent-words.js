// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.


// Example 1:
// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.

// Example 2:
// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

var topKFrequent = function(words, k) {
    let map = new Map()
    // let arr = []
    for(let i = 0; i < words.length; i++){
        map.set(words[i], (map.get(words[i]) + 1) || 1)
    }
    let result = [...map.keys()].sort((a,b) => {
        if(map.get(a) === map.get(b)){
            return a.localeCompare(b)
        } else return map.get(b) - map.get(a)
    }).slice(0,k)
    return result
    // for(let i = 0; i < k; i++){
    //     arr.push(result[i])
    // }
    // return arr
};
// could push the top K words into an arr, but the complexity is not as well as using slice(0,k)