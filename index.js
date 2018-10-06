function scuberGreetingForFeet(dist) {
    let statement

    if (dist < 400) {
        statement = "This one is on me!"
    } else if (dist > 2000 && dist <= 2500) {
        statement = "I will gladly take your thirty bucks."
    } else if (dist > 2500) {
        statement = "No can do."
    }

    return statement
}

function ternaryCheckCity(city) {
   return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip_level) {
    switch(tip_level) {
        case "generous":
            return "Thank you so much."
            break;
        case "not as generous":
            return "Thank you."
            break;
        default:
            return "Bye."
            break;
    }
}