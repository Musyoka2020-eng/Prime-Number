
function nthNumFib(n, memo = []) {
    baseValue = 10
    if (n <= 1) {
        return baseValue * 1;
    }

    if (memo[n]) {
        return memo[n]
    }

    memo[n] = nthNumFib(n - 1, memo) + nthNumFib(n - 2, memo)
    return memo[n]
}

let fibonacci = nthNumFib(10)
console.log(fibonacci);

function generateFibonacci(number) {
    let Fibonacci = [1, 2];

    for (let i = 2; i < number; i++) {
        Fibonacci[i] = Fibonacci[i - 1] + Fibonacci[i - 2];
    }

    return Fibonacci
}

let nthterm = 10;
let result = generateFibonacci(nthterm);
console.log(result);