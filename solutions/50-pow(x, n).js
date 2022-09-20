// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// var myPow = function(x, n) {
//     return Math.pow(x, n)
// };

var myPow = function(x, n) {
    if(n === 0) return 1
    if(n === 1) return x
    if(n < 0) return (1 / myPow(x, -n))
    if (n%2 === 0) {
        // n is even : x ^ n = x ^ (2 * (n / 2)) = (x ^ 2) ^ (n / 2)
        let m = myPow(x, n/2)
        return m * m
    } else {
        // n is odd : x ^ n = x ^ ( 2 * (n - 1) / 2 + 1 ) = (x ^ 2) ^ ((n - 1) / 2) * x
        return x * myPow(x, n-1)
    }
}