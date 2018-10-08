// Write your code in this file!
function scuberGreetingForFeet (distance) {
    let ride;
    if (distance < 400) {
        ride = 'This one is on me!';
    }
    else if (distance > 2000  && distance < 2500) {
        ride = 'I will gladly take your thirty bucks.';
    }
    else {
        ride = 'No can do.';
    }

    return ride;
};

function ternaryCheckCity (city) {
    return city == 'NYC' ? 'Ok, sounds good.' : 'No go.'
};

function switchOnCharmFromTip (tip) {
    let response;
    switch (tip) {
        case 'generous':
            response = "Thank you so much.";
            break;
        case 'not as generous':
            response = "Thank you.";
            break;
        default:
            response = "Bye."
    };

    return response;
};