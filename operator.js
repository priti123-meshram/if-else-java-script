let z=require("readline-sync");
var a= z.questionInt("enter the num1 :- ");
var b= z.questionInt("enter the num2 :- ");
var c= z.question("enter the operator")
if(c=="+"){
    console.log(a+b)
}
else if (c=="-"){
    console.log(a-b)
}
else if(c=="*"){
    console.log(a*b)
}
else if(c=="%"){
    console.log(a%b)
}
else if(c=="/"){
    console.log(a/b)
}
else{
    console.log("ok")
}