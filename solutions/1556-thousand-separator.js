// Given an integer n, add a dot (".") as the thousands separator and return it in string format.


// Example 1:
// Input: n = 987
// Output: "987"

// Example 2:
// Input: n = 1234
// Output: "1.234"

var thousandSeparator = function(n) {
    let num = n.toString()
    let arr = []
    for(let i = 0; i<num.length; i++){
        if((num.length - i)%3 === 0 && i !== 0 ){
            arr.push('.')
        }
        arr.push(num[i])
    }
    return arr.join('')
};