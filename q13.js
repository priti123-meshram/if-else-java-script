// let readlineaSync = require("readline-sync");
// var age=readlineaSync.questionInt("enter age");
// if(age<6){
//    console.log("You are small");
// }
// if(age>=6){
//    console.log("You can go school");
// }
// if(age>=18){
//    console.log("You can vote in elections.");
// }
// if(age>=21){
//    console.log("You can drive a car");
// } 
// if(age>=24){
//    console.log("You can marry");
// }
// if(age>=25){
//    console.log("You can drink");
// }


let readlineaSync = require("readline-sync");
var num1=readlineaSync.questionInt("Input first number: ");
var num2=readlineaSync.questionInt("Input second number: ");
var num3=readlineaSync.questionInt("Input tird number: ");
 //checking num1 is a middle number or not
if(num2>num1 && num1>num3 || num3>num1 && num1>num2){
   console.log(num1, "is a middle number")
}
 //checking num2 is a middle number or not
if(num1>num2 && num2>num3 || num3>num2 && num2>num1){
   console.log(num2, "is a middle number")
}
 //checking num3 is a middle number or not
if(num1>num3 &&num3>num2 || num2>num3 &&num3>num1){
   console.log(num3, "is a middle number")
}