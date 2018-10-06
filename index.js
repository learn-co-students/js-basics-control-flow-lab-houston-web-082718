// Write your code in this file!




function scuberGreetingForFeet(someValue) {
    let value;
    if (someValue <= 400) {
        value = 'This one is on me!'
    } else if (someValue > 1999 && someValue < 2500) { 
        value = 'I will gladly take your thirty bucks.'
    } else {
        value = 'No can do.'
    }
    return value
}
function ternaryCheckCity(city) {

    return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

let out
 function switchOnCharmFromTip(type) {
     switch (type){
     case 'generous' :
            out = "Thank you so much."
        break;
        case 'not as generous' :
        out = 'Thank you.'
        break;
        default:
      return 'Bye.';
    }
    return out
}

function addFive(someNumber){
    let result
    if (someNumber > 0) {
        result = someNumber + 5
    }  
    return result  
}
