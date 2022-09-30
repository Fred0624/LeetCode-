// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

// Example 1:

// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.

// var sortPeople = function(names, heights) {
//     const merged = {}
//     for (let i = 0; i < heights.length; i++){
//         merged[heights[i]] = names[i]
//     }
//     heights.sort((a,b) => b-a);
//     let desHeights = []
//     for (let i = 0; i < heights.length; i ++){
//         desHeights.push(merged[heights[i]])
//     }
//     return desHeights
// };

var sortPeople = function(names, heights) {
    let length = heights.length;
    
    //Hashmap
    let map = new Map()
    //Running a For Loop through the number of elements in heights array
    for(let i = 0; i<length; i++){
        
        //setting the values into my map 
        map.set(heights[i], names[i])
        
    }
    
    //sorting heights to from greatest to least
    heights.sort((a,b) => b-a);
    
    
    //new array to push my values from map 
    let res = [];
    
    for(let height of heights){
        
        //pushing my map into my new array
        res.push(map.get(height))
    }
    return res
};