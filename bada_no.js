let z=require("readline-sync");
var varx= z.questionInt("enter the num :- ");
var vary= z.questionInt("enter the num :- ");
if (varx>vary){
    console.log(varx,"is greter than ",vary)
}
else if (varx==vary){
    console.log(varx,"it is equal",vary)  
}  
else {
    console.log(varx," is less than",vary)
}