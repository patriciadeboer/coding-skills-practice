/*
Palindrome

Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string.
*/

//Previous Solution
// function Palindrome(str) {

//   // code goes here
//   const strArr=str.split('').filter(letter=>!(letter===' '))

//   const reverseStr=str.split('').reverse().filter(letter=>!(letter===' '))

//   for(let i=0;i<strArr.length;i++){
//       if(strArr[i]!==reverseStr[i]){
//           return false
//       }
//   }
//   return true;

// }

function Palindrome(str) {

  const forward = str.split(' ').join("").toLowerCase()
  const reverse= forward.split('').reverse().join('')

  return reverse === forward
}

// console.log(Palindrome('eye'))

module.exports = Palindrome
