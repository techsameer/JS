/*
    switch(key) {
        case value:

            break;
        
        default:
            break;
    }
*/

const month = 3

switch (month) {
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    

    default:
        console.log("Default case match");
        break;
}



const month1 = "feb"

switch (month1) {
    case "jan":
        console.log("Jan")
        break;
    case "feb":
        console.log("Feb")
        break;
    case "mar":
        console.log("March")
        break;
    case "apr":
        console.log("April")
        break;
    

    default:
        console.log("Default case match");
        break;
}