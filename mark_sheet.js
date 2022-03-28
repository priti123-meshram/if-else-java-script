let z=require("readline-sync");
var marks= z.question("enter the marks :- ");
if(marks<=25){
    console.log("f")
}
else if (marks>=25 & marks<45){
    console.log("e")
}
else if (marks>=45 & marks<50){
    console.log("d")
}
else if (marks>=50 & marks<60){
    console.log("c")
}
else if (marks>=60 & marks<80){
    console.log("b")
}
else{
    console.log("a")
}