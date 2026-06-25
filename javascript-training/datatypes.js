
// data types is two dufferent types in javascript

// 1. Premitive (Immutable data types) (original values wont change if we just perform some operations on top of that).
// 2. Non Premitive (Mutable data types) (original values will change if we just perform some operations on top of that).

/* //Immutable
let a = 10;
a+10;
console.log(a);


// Mutable
let empData = {
    "empName" :"Sowjanya",
    "empID" :1234,
}
empData.Age = 28;
console.log(empData);

///////////////////////////  Primitive DataTypes ////////////////////////////
/* 
1. number
2. string
3. Boolean
4. Undefined
5. Null
6. Symbol 

// 1. Number : The data type that store numbers with decimals and without decimals or without any quatiotions.

/* let num1 = 10
let num2 = 11.5

//console.log(num1);
//console.log(num1);

console.log(typeof num1);
console.log(typeof num1);

// String = that data can store like text, words, sentence, it always used to single or double or backticks.
let empName = "Sowjanya G"
let empRole = "Automation ENg"
let empCity = "Bangalore"
console.log(empName);
console.log(empRole);
console.log(empCity);

let empinfo = `emp name is ${empName} emp role is ${empRole} emp city is ${empCity}`;
console.log(empinfo); */ 

// boolean - whenver we are going to write a condition or store the data the result should be true/false
let isRaining = true;
let isSunny = false;

console.log(isRaining);
console.log(isSunny);

console.log(typeof isRaining); // type of =it helps to check what kind of data stored in a variable.
console.log(typeof isSunny);

// Undefined - undefined represent a variable declared but not assigned any value.

let age; // not assigned any value like Number
console.log(age);

// Null - null represent a variable that has been declare and assigned to a null or empty value.

let salary = 200000;
console.log(salary);
salary = null; // intentionally making it empty
console.log(salary);

// symbol - 

//////////////////////// Non primitiv data types ////////////////////////////////////

// Object - acollection of key values pairs with in the curly braces.

let empData = {
    "empName": "Sowjanya",
    "empId": 1238,
    "visaStatus": true,
    "address" : {
        "city": "Bangalore",
        "State": "Karnataka", 
       "pinCode": 56003,
    }
}

// Access the data from the object
console.log(empData.empId);
console.log(empData.address.city);

console.log(empData["empId"]); // objectname["keyName"] = value (property name as dymanic)
console.log(empData["address"]["city"]); //objectname["keyName"]["keyName"] = value

let key = "empName";
console.log(empData[key]);
console.log(empData.key);// undefined

// Array - arrey is nothing but list of value that can be store at one place.


