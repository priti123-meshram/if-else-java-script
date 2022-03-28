let z=require("readline-sync");
var day= z.question("enter the day📆 :- ");
var time= z.question("enter the menu time :- ");
switch(day){
    case "monday":
        switch(time){
            case "breakfast":
                console.log("pasta")
                break
            case "lunch":
                console.log("dal chaval")
                break
            case "dinner":
                console.log("chapati bhaji")
        }
        break
    case "tuesday":
        switch(time){
            case "breakfast":
                console.log("poha")
                break
            case "lunch":
                console.log("pulav.")
                break
            case "dinner":
                console.log("shimlamirch ki sabji roti")
        }
        break
    case "wednesday":
        switch(time){
            case "breakfast":
                console.log("chila")
                break
            case "lunch":
                console.log("palakdal chaval")
                break
            case "dinner":
                console.log("mungfaly ki sabji chapati")
        }
        break
    case "thousday":
        switch(time){
            case "breakfast":
                console.log("aalu paratha")
                break
            case "lunch":
                console.log("palakdal chaval")
                break
            case "dinner":
                console.log("aalu ki sabji aur chaval")
        }
        break
    case "friday":
        switch(time){
            case "breakfast":
                console.log("fraid rice")
                break
            case "lunch":
                console.log("aalu ki sabji chavl dal")
                break
            case "dinner":
                console.log("palkdal roti")
        }
        break
    case "saterday":
        switch(time){
            case "breakfast":
                console.log("aalu paratha aur tomato sos")
                break
            case "lunch":
                    console.log("chaval dal sabji")
                    break
            case "dinner":
                console.log("chaval dal sabji roti")
        }
        break
    case "sunday":
        switch(time){
            case "breakfast":
                console.log("maggi")
                break
            case "lunch":
                console.log("masala rice")
                break
            case "dinner":
                console.log("puri sabji")
        }
        break
    

    default:
        console.log("today is holiday")
    }