function scuberGreetingForFeet(someValue){
  // Write your code here!
  if (someValue <= 400) {
    return "This one is on me!"
  } else if (400 < someValue  && someValue <= 2000) {
    return "That will be twenty bucks."
  } else if (2000 < someValue && someValue <= 2500) {
    return "I will gladly take your thirty bucks."
  } else if (someValue > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  let checkCity = city==="NYC" ? "Ok, sounds good." : "No go."
  return checkCity;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    case 'thanks for everything':
      return 'Bye.'
  }
}