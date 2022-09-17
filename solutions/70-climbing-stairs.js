// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

var climbStairs = function(n) {
    let arr = []
    arr.push(1)
    arr.push(2)
    for(let i=2; i<n; i++){
        arr.push(arr[i-1] + arr[i-2])
    }
    return arr[n-1]
};