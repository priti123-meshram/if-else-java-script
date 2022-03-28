let n=require("readline-sync");
var a= n.questionInt("enter the num :- ");
var b= n.questionInt("enter the num :- ");
var c= n.questionInt("enter the num :- ");
if(a>b & a>c){
    console.log(a)
}
else if (b>a & b>c){
    console.log(b);
}
else if (c>a & c>b){
    console.log(c)
}