function power(x, n){
    if(x == 0) return 0
    if(n == 0) return 1
    return power(x, n - 1) * x
}

console.log(power(2, 10))