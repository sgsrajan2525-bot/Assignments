
// loop statements

// loop statements are nothing but condition that we are going to add along with the statemts to execution.
// inside reapete the code again and again.
// before
 //let name : string = "Sowjanya";
 //console.log(name);

 // if we want 10 times same name
 /* console.log(name);
 console.log(name);
 console.log(name);
 console.log(name);
 console.log(name);
 console.log(name);
 console.log(name);
 console.log(name);
 console.log(name);
 console.log(name); */

 // loop consepts divided mainly into 2 different types
 // 1. for loop=
 // 2. while loop=

/* for(let i :number = 1;i<=10 ;i++);{
    console.log(name);
} */

// while loop
// Syntax : while(condition-to-start){
// code to be excuted
// }
let j : number = 1;
let isPageloaded : boolean = false;

while(j>0){
    if(j>5 || isPageloaded){
        break;
    }
    console.log("Refresh the page. ")
}