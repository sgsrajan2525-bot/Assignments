
/* Create common function and then based on below details, print whether user is eligible to get the loan
or not
customerName = "John Doe";
creditScore = 720;
income = 55000.0;
isEmployed = true;
debtToIncomeRatio = 35.0;
 */

// If the DTI ratio is less than 40%, the loan is approved.
// If the DTI ratio is 40% or greater, the loan is denied.

let customerName : string = "John Doe";
let creditScrore : number = 720;
let income : number = 55000.0;
let isEmployed : boolean = true;
let debtToIncomeRatio : number = 35.0;

if (creditScrore >= 750 && income >= 55000.0 && isEmployed && debtToIncomeRatio <= 40) {
    console.log(customerName + "elegible for the loan");
} else {
    console.log(customerName + "not elegible for the loan");
    }

    // "John Doenot elegible for the loan"