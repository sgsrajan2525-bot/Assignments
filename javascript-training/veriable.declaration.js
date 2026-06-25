

// Programme = All set of instructions

//Instruction = Combination of data Plus action.

// How to store the data in programme.
// declaration variable = data

// We have a 3 differenr type keywords using in JavaScript

// 1. var (We should avaoid the modern java script programme).
// 2. let  (Used for variable that cant be re - assigned).
// 3. const (Used for constant values taht cant be re - assigned).

// these 3 dif variables differ 4 different parameters

// 1. intilaization (adding the variable at the time of declaration )
// 2. Re - asignment (Changing the original value)
// 3. Re - Declaration (declare the value again)
// 4. Scope (the area of programme whare variable is accesable).

//1. intilaization (adding the variable at the time of declaration )

var a; //(not mandatory adding the value at the biginning time)
let b; // (not mandatory adding the value at the biginning time)
const c = 30; // (const value is Mandatory to adding the at biggimg)

// 2. Re - asignment (Changing the original value)
a = 10; //(var is allowing Re asiignment)
b = 20; //(var is allowing Re asiignment)
//c = 40; //(const value is not allowing )

//3. Re - Declaration (declare the value again).
var a = "SowJi" //(var allowing re declaration)
//let b = "naji" //(let not allowing re declaration)
// const c = "Teja" //(const is not allowing re declaration)

//4. Scope // (the area of programme whare variable is accesable).
// var (not blocked scope)
// let (blocked scope)
// const (blocked scope)

{

var x = 30;
let  y = 40;
const z = 50;

console.log(x);
console.log(y);
console.log(z);

}

console.log(x);
//console.log(y);
//console.log(z);