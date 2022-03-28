let n=require("readline-sync");
var a= n.question("you👩 :- ");
if(a=="hii"){
    console.log("\n\tfriend🧑 - hello\n");
    var b= n.question("you👩 :- ");
    if(b=="how are you?"){
        console.log("\n\tfriend🧑 - i'm fine\n\t\n\t and you\n")
        var c= n.question("you👩 :- ");
        if(c=="i'm also fine"){
            console.log("\n\tfriend🧑 - ok\n")
            var d= n.question("you👩 :- ");
            if(d=="what are you doing?"){
                console.log("\n\tfriend🧑 - i'm doing study🙇\n")
                var e= n.question("you👩 :- ");
                if(e=="ok"){
                    console.log("\n\tfriend🧑 - hmmm\n\t did you have a meal?🍛\n")
                    var f= n.question("you👩 :- ");
                    if(f=="yes"){
                        console.log("\n\tfriend🧑 - hmmmmmm\n")
                        var e= n.question("you👩 :- ");
                        if(e=="ok by"){
                            console.log("\n\t okk byyyy\n\t i'm doing continue my study byyyyy👋")
                        }
                    }
                    else{
                        console.log("\n\tfriend🧑 - ok")
                    }
                }
                else{
                    console.log("\n\tfriend🧑 - no yaar")
                }
            }
            else{
                console.log("\n\tfriend🧑 - just i'm tolking to you")
            }
        }
        else{
            console.log("\n\tfriend🧑 - i'm not fine")
        }
    }
    else{
        console.log("\n\tfriend🧑 - i'm not fine")
    }

}
else{
    console.log("\n\tfriend🧑 - i'm busy")
}