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

    let statement

    if (city === "NYC") {
        statement = "Ok, sounds good."
    } else {
        statement = "No go."
    }

    return statement
}

function switchOnCharmFromTip(tip_level) {

    let statement

    if (tip_level === "generous") {
        statement = "Thank you so much."
    } else if (tip_level === "not as generous") {
        statement = "Thank you."
    } else {
        statement = "Bye."
    }

    return statement
}