// O(2^n) Time - O(n) Space
function getNthFib(n) {
    if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        return getNthFib(n - 1) + getNthFib(n - 2);
    }
}

// O(n) Time - O(n) Space
function getNthFibMemoized(n, memoize = {1: 0, 2: 1}) {
    if (n in memoize) {
        return memoize[n];
    } else {
        memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
        return memoize[n];
    }
}

// O(n) Time - O(1) Space
function getNthFibInPlace(n) {
    const lastTwo = [0, 1];
    let counter = 3;
    while (counter <= n) {
        const nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        counter++;
    }
    return n > 1 ? lastTwo[1] : lastTwo[0];
}

console.log(getNthFib(2)); // 1
console.log(getNthFib(6)); // 5 - 0, 1, 1, 2, 3, 5
console.log(getNthFibMemoized(2));
console.log(getNthFibMemoized(6));
console.log(getNthFibInPlace(2));
console.log(getNthFibInPlace(6));
console.log(getNthFibInPlace(1477));
