function scuberGreetingForFeet(someValue) {
  if (someValue < 400) {
    return `This one is on me!`
  }
  else if (someValue > 2500) {
    return `No can do.`
  }
  else if (someValue > 400) {
    return `I will gladly take your thirty bucks.`
  }
}

function ternaryCheckCity(city) {
  return (city === 'NYC' ? `Ok, sounds good.` : `No go.`)
}
let tip;
function switchOnCharmFromTip(tip) {
  switch(tip) {
    case 'generous':
      return `Thank you so much.`
    case 'not as generous':
      return `Thank you.`
    default:
      return `Bye.`
  }
}