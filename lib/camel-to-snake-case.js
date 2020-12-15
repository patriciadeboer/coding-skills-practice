/*
Codewars: https://www.codewars.com/kata/529b418d533b76924600085d

Description:
Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If method gets number, it should return string.

Examples:

//  returns test_controller
toUnderscore('TestController');

// returns movies_and_books
toUnderscore('MoviesAndBooks');

// returns app7_test
toUnderscore('App7Test');

// returns "1"
toUnderscore(1);

*/
function toUnderscore(string) {
  // Check if string is actually a number
  if(!isNaN(string)){
    return `${string}`
  }
  // convert to snake_case from CamelCase
  return string.split('').map((letter,i)=>{
    if(i==0){
      return letter.toLowerCase()
    }

    return letter.toUpperCase()===letter && isNaN(letter) ? `_${letter.toLowerCase()}` : letter
  }).join('')
}

module.exports = toUnderscore;

// Another method

function toUnderscore2(string) {
  if(!isNaN(string)){
    return `${string}`
  }
  return string.split('').map((char,idx)=>{
    if(char===char.toUpperCase()&&isNaN(char)&&idx!==0){
      return `_${char.toLowerCase()}`
    }else{
      return char.toLowerCase()
    }
  }).join('')
}
module.exports = toUnderscore2;
