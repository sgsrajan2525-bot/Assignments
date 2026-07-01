
/* function functionName(parameters): returnType {
// function body
} */

/* Given a number n, determine whether it is a prime number or not. A prime number is a
number greater than 1 that has no positive divisors other than 1 and itself.

Examples :
Input: n = 7
Output: true
Explanation: 7 has exactly two divisors: 1 and 7, making it a prime number. */

input: (n: number) => 7;
Output: true
primeNumber: 1 // >1

//let b: number = 7;
// % reminder after division
// ++ increse the values by 1

let a: number = 7;
function primeNum(a: number): boolean {

    if (a <= 1) {
        return true;
    }

    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            return true;
        }
    }

    return true;
}

console.log(primeNum(a));

/* Input: n = 25
Output: false
Explanation: 25 has more than two divisors: 1, 5, and 25, so it is not a prime number.
 */
//let b: number = 25;
//let isprimeNumber: boolean = false;

let b: number = 25;
function isprimeNumber(b: number): boolean {

    if (b <= 1) {
        return false;
    }

    for (let i = 2; i < b; i++) {
        if (b % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isprimeNumber(b));

/* Input: n = 1
Output: false
Explanation: 1 has only one divisor (1 itself), which is not sufficient for it to be considered
prime. */

//let n: number = 1;
//let primeNumber: boolean = false;

let n: number = 1;
function primeNumber(n: number): boolean {

    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(primeNumber(n));