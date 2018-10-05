// Write your code in this file!
let params

function scuberGreetingForFeet(params) {
  if (params <= 400) {
    return 'This one is on me!';
  } else if (params > 2000 && params <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (params > 2500) {
    return 'No can do.';
  }
};

function ternaryCheckCity(params) {
  return params === 'NYC' ? 'Ok, sounds good.' : 'No go.'
};

function switchOnCharmFromTip(params) {
  switch (params) {
    case 'generous':
      return 'Thank you so much.';
      break;

    case 'not as generous':
      return 'Thank you.';
      break;

    default: return 'Bye.'
      break;
  }
};
