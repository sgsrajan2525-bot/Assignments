
//sysntax: declaration variables = data;

// Operators in Java script 
// Operators - is nothing but set of  special charaters while using java scipt
/* we have 5 different types of operators

1. Arthamatic operators.
2. Assignment operators.
3. Comparison operators.
4. Logical operatos.
5. Ternary operator. */

/* 1. Arthamatic operators: we used special characted (+, -, *, %, /, ++, --).

+ Additional
- Subsraction
* Multiplication
/ division
% Modules/remainder
++ increment - (Increase the previous value by 1)
-- decrement - (decrese the previous value by 1) */

let a= 20
let b= 30

//a++ post increment (after execution adding the value 1)
//b-- post decrement (after execution decresing the value 1)

/* console.log(a++);
console.log(a) // after execution increse the value

console.log(b--);
console.log(b); // after execution decrese the value */

//++a pre increment (before execution increse the value 1) no need to wait for next line.
//--b pre decrement (before execution decresing the value 1)

//console.log(++a); // before execution increse the value (no need to declare the value like console.log(a)).
//console.log(--b); // before exection decrese the value (no need to declare the value like console.log(b)).

//2. Assignment operators. speciel charactes used to assign to the variables (=, +=, -=, *=, /=, %=).

/* let i = 10
console.log("intial value of i is: " + i);

i += 10 // i= i+10, i+i+i+i+i+i+i+i+i+i+10 = 20
console.log("After using += value of i is: " + i);

i -= 10 // i= i-10, 20-10 = 10
console.log("After using -= value of i is: " + i);

i *= 10 // i= i*10, 10*10 = 100
console.log("After using *= value of i is: " + i);

i /= 10 // i= i/10, 100/10 = 10
console.log("After using /= value of i is: " + i);


let x = 20
console.log("intial value of x is: " + x);

x += 20 // i= i+20, i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+i+10 = 40
console.log("After using += value of x is: " + x);

x -= 20 // i= i-20, 40-20 = 20
console.log("After using -= value of x is: " + x);

x *= 20 // i= i*20, 20*20 = 200
console.log("After using *= value of x is: " + x);

x /= 20 // i= i/20, 200/10 = 20
console.log("After using /= value of x is: " + x); */

//3. Comparison operators -- Special charactes is used to compare two values (==, ===, !=, >, <, >=, <=).
// == represents loose equitality (loose equility compare only data )
// === represent strict equility (Strict equility compare along with its data type).

/* let x = 10
let y = 10
let z = "10" // text/string */

let x = 10
let y = 30
let z = "10" // text/string 

/* console.log(x==y); // true
console.log(x==z); // true

console.log(x===y); // true
console.log(x===z); // false */

/* console.log(x!=y); // false
console.log(x>y); // false
console.log(x<y); // false
console.log(x>=y); // true
console.log(x<=y); // true */

/* console.log(x!=y); // true
console.log(x>y); // false
console.log(x<y); // true
console.log(x>=y); // false
console.log(x<=y); // true */

// 4. Logical operatos. special character build the logic by combining multiple conditions together (double amprasent &&(and), pipe||(or), escalamator!(not))

// && - we will get a result as true only, if all the conditions are true.
// || - we will get a result as true if any one of the condition as true.
// ! - we will get a result as true if condition is false.

let p= 10;
let q= 20;
let r= 30; 

console.log(p<q && p>q); // true && false = false
console.log(p<q || p>q); // true || false = True
console.log(!(p<q)); // not true  = false

// 5. Terenary operators: Special character used to write a condition in single line or shorthand of an if else condition statement

// Syntax : let result = condition ? value-if-true = value-if-false ;

let age = 56

let result = (age >= 57) ? "Eligible" : "Not Eligible" ;
console.log(result);