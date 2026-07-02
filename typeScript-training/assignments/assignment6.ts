
// Assignment (Conditional Statements & Loops)

//Employee table:

let employeName: string[] = ["Alice Johnson", "Bob Smith", "Carol Davis", "David Brown", "Eva Green"];
let baseSalary: number[] = [75000.0, 68000.0, 82000.0, 90000.0, 60000.0];
let exPeriance: number[] = [5.1, 3.2, 7.1, 10.2, 2.4];
let yearEndrating: number[] = [4.2, 3.8, 4.5, 2.5, 3.5];

// Hike rating

let hikeRating: string[] = ["> =4.0", ">=3 && < 4", "< 3.0"]
let veriablePay: number[] = [15.0, 10.0, 3.0]
let bonus: number[] = [1500, 1200, 300]

// Employees with Experience >= 5 Years get extra Reward of 5000;
// There are 5 Employee records. Now Calculate the Hike percentage of each Employee and store the
// Values in Map with EmployeeName and HikePercentagevalue and Print them.

// Hike = ( Base Salary * variable pay % ) + Bonus + Reward ;
// Hike % = Hike / Base Salary .

//for one employee details
/* employeName = Alice Johnson
salary = 75000
experiance = 5.1
rating = 4.2 */
//Hike = ( Base Salary * variable pay % ) + Bonus + Reward ;
//hike = (75000*15.0%) + 1500+5000
// above 5 years - Alice, carol, david.

// i=0-Alice, i=1-bob, i=2-carol, i=3-david, i=4-eva

let hikeMap = new Map<string, number>();

for (let i = 0; i < employeName.length; i++) {
    let variablePay = 0;
    let bonus = 0;
    let reward = 0;
    if (yearEndrating[i]! >= 4) {

    variablePay = baseSalary[i]! * 15 / 100;
    bonus = 1500;

}
else if (yearEndrating[i]! >= 3) {

    variablePay = baseSalary[i]! * 10 / 100;
    bonus = 1200;

}
else {

    variablePay = baseSalary[i]! * 3 / 100;
    bonus = 300;

}
if (exPeriance[i]! >= 5) {
        reward = 5000;
    }

    let hike = variablePay + bonus + reward;

    let hikePercentage = (hike / baseSalary[i]!) * 100;

    hikeMap.set(employeName[i]!, hikePercentage);
}

for (let [name, percentage] of hikeMap) {
    console.log(name, percentage.toFixed(2) + "%");
}
