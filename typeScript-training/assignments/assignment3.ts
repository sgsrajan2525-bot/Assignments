
/* Assignment -3 (Arrays/Datatypes/Operators)

1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
marks [75, 80, 82] Add 10 marks to each students using assignment operators and
store it into another array, after adding 10 marks identify the average marks of all
students

Expected Output:
Updated Marks:
Suresh: 85
Mahesh: 90
Naresh: 92
Average Marks: 89.0 */


// Student names ["Suresh", "Mahesh", "Naresh"]
// Marks [75, 80, 82]
// Add 10 marks to each students using assignment operators

/* let suresh = 75
let Mahesh = 80
let Naresh = 82 */

let studentNames: string[]= ["Suresh", "Mahesh", "Naresh"];
let marks: number[] = [75, 80, 82];
let updatedMarks: number[] = [];
let total: number = 0;

//let newMarks : number [] = [75, 80, 82];

for (let i = 0; i < marks.length; i++) {
    let mark = marks[i];
    mark += 10;  
    updatedMarks.push(mark);
    total += mark;
}
let average: number = total / updatedMarks.length;
console.log("Updated Marks:");
    
for (let i = 0; i < studentNames.length; i++) {
    console.log(`${studentNames[i]}: ${updatedMarks[i]}`);
}

console.log("Average Marks:", average.toFixed(1));