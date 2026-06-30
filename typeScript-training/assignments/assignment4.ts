
/* Assignment -4 (Conditional Statements & Loops)

Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
1 50000
2 -2000
3 3000
4 -15000
5 -200
6 -300
7 4000
8 -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements
1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions */

// 1. Print total number of credit and debit transactions completed

let bankTransaction : number[]= [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];
console.log(bankTransaction);

//2. Print the total amount credited and debited in account

let totalCredit: number = 0;
let totalDebit: number = 0;

for (let i = 0; i < bankTransaction.length; i++) {
    if (bankTransaction[i] > 0) {
        totalCredit += bankTransaction[i];
    } else {
        totalDebit += bankTransaction[i];
    }
}

console.log("Total Credited Amount:", totalCredit);
console.log("Total Debited Amount:", Math.abs(totalDebit));

//3. Print total amount remaining at the end in Bank Account

let transaction: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let balance: number = 0;

for (let i = 0; i < transaction.length; i++) {
    balance += transaction[i];
}

console.log("Remaining Balance:", balance);

//4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
//Transaction with Amount” and also print total number of suspicious transactions


let susPecoiusam: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let suspiciousCount: number = 0;
for (let i = 0; i < bankTransaction.length; i++) {

    if (susPecoiusam[i] > 10000) {
        console.log(
            "Suspicious Credit Transaction with Amount: " +
            bankTransaction[i]
        );
        suspiciousCount++;
    }
    else if (susPecoiusam[i] < -10000) {
        console.log(
            "Suspicious Debit Transaction with Amount: " +
            bankTransaction[i]
        );
        suspiciousCount++;
    }
}

console.log("Total Suspicious Transactions:", suspiciousCount);