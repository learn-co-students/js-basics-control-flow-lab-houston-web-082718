// Write your code in this file!

/*scuberGreetingForFeet() — Use if and else if statements to return the correct greeting 
based on the distance the passenger desires to travel.*/
function scuberGreetingForFeet(distance) {
    let greeting;

    /*gives customers a free sample if the ride is less than or equal to 400 feet*/
    if (distance <= 400) {
        greeting = "This one is on me!";
    }
    /*charges 30 dollars for a distance over 2000 feet*/
    else if (distance > 2000 && distance <= 2500) {
        greeting = "I will gladly take your thirty bucks.";
    }
    /*does not allow rides over 2500 feet*/
    else if (distance > 2500) {
        greeting = "No can do.";
    }
    return greeting;
}

/*ternaryCheckCity() — Use a ternary operator to return the correct response 
based on the desired destination of the passenger.*/
function ternaryCheckCity(city) {
    /*returns "Ok, sounds good." when the city is NYC
    should return "No go." if the destination city is not NYC*/
    return city === "NYC" ? "Ok, sounds good." : "No go.";
}

/*switchOnCharmFromTip() — Use a switch statement to return a different response 
based on the generosity of the passenger's tip.*/
function switchOnCharmFromTip(tip) {
    let response; 

    switch (tip) {
        /*should return "Thank you so much." if the tip is generous*/
        case "generous": 
            response = "Thank you so much.";
            break;
        /*should return "Thank you." if the tip is not as generous*/
        case "not as generous":
            response = "Thank you.";
            break;
        /*should return "Bye." if anything else*/
        default:
            response = "Bye.";
    }
    return response;
}