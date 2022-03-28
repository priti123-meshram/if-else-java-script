// let z=require("readline-sync");
// var a= z.questionInt("enter the pin :- ");
// if (a=="1011"){
//     console.log("carrect your pin");
//     var e=z.question("select your languege\n 1) english\n 2) hindi\n 1 or 2:- ")
//     if (e=="1"){
//         console.log("ok");
//         var b=z.question("enter the withdrawal :- ")
//         if (b=="withdrawal"){
//             console.log("saving");
//             var c=z.questionInt("enter the cash :- ")
//             if (c>=0){
//                 console.log("💸take cash\n")
//                 console.log("😊....thank you....😊");
//             }
//             else{
//                 console.log("🙁no cash🙁");
//             }
//         }
//         else{
//             console.log ("ok");
//         }
//     }
//     else if (e=="2"){
//         console.log("ok");
//         var b=z.question("cash nikala hai kya\n ha /na :- ")
//         if (b=="ha"){
//             console.log("bachat khata");
//             var c=z.questionInt("cash kitne nikalne hai :- ")
//             if (c>=0){
//                 console.log("💸cash aa raha hai wait kijiye\n")
//                 console.log("😊....dhanyavad....😊");
//             }
//             else{
//                 console.log("🙁cash nagi hai🙁");
//             }
//         }
//         else{
//             console.log ("  ok\n😊...dhanyavad...😊");
//         }     
//     }
//     else{
//         console.log("ok")
//     }
// }
// else{
//     console.log("incarect pin");
// }



let z=require("readline-sync");
var a= z.questionInt("enter the pin :- ");
if (a=="1011"){
    console.log("carrect your pin");
    var e=z.question("select your languege\n 1) english\n 2) hindi\n 1 or 2:- ")
    if (e=="1"){
        console.log("ok");
        var b=z.question("enter the withdrawal :- ")
        if (b=="withdrawal"){
            console.log("saving");
            var c=z.questionInt("enter the cash :- ")
            if (c>=0){
                console.log("take cash\n")
                console.log("....thank you....");
            }
            else{
                console.log("no cash");
            }
        }
        else{
            console.log ("ok");
        }
    }
    else if (e=="2"){
        console.log("ok");
        var b=z.question("cash nikala hai kya\n ha /na :- ")
        if (b=="ha"){
            console.log("bachat khata");
            var c=z.questionInt("cash kitne nikalne hai :- ")
            if (c>=0){
                console.log("cash aa raha hai wait kijiye\n")
                console.log("....dhanyavad....");
            }
            else{
                console.log("cash nagi hai");
            }
        }
        else{
            console.log ("  ok\n...dhanyavad...");
        }     
    }
    else{
        console.log("ok")
    }
}
else{
    console.log("incarect pin");
}




