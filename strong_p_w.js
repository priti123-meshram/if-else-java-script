let n=require("readline-sync");
var a= n.question("enter the alphabet :- ");
if (a>="a" || a<="z"){
    // console.log(a)
    var char=n.question("enter the char")
    if (char=="#" || char=="@" || char=="&"){
        // console.log(char)
        var num=n.questionInt("enter the num")
        if (num>=0){
            console.log("\nstrong password \n",a+char+num)
        }
        else{   
            console.log("no")
        }
    }
    else{
        console.log("its not char")
    }
}
else{
    console.log("this is not alphabet")
}