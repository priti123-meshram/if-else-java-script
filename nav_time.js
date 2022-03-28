let n=require("readline-sync");
var time= n.questionInt("enter the time :- ");
if (time>=6 & time<7){
    console.log("morning exercise")
}
else if(time>=7 & time<9.00){
    console.log("brack time1")
}
else if (time>=9.00 & time<12.30){
    console.log("coding time")
}
else if (time>=12.30 & time<14){
    console.log("lunch break time")
}
else if (time>=14 & time<16){
    console.log("coding time")
}
else if (time>=16 & time<17){
    console.log("culture activities")
}
else if (time>=17 & time<17.30){
    console.log("brack time2")
}
else if (time>17.30 & time<20){
    console.log("coding time2")
}
else if (time>=20 & time<21){
    console.log("english activity")
}
else{
    console.log("dinner and free time")
}
