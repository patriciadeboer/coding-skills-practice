/*
  Description:
  Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

  Notes:

  Only lower case letters will be used (a-z). No punctuation or digits will be included.
  Performance needs to be considered
  Input strings s1 and s2 are null terminated.
  Examples
  scramble('rkqodlw', 'world') ==> True
  scramble('cedewaraaossoqqyt', 'codewars') ==> True
  scramble('katas', 'steak') ==> False
*/

// function scramble(str1, str2) {
//  //code me
//   const stringCombo = [...str1]
//   let feasible = true;
//   str2.split('').forEach(letter=>{
//     const idx = stringCombo.indexOf(letter)
//     if(idx!== -1){
//       stringCombo.splice(idx,1)
//     }else{
//       feasible=false;
//     }
//   })
//   return feasible
// }

function scramble(str1, str2) {
  const counts={};
  str1.split('').forEach(letter=>{
    counts[letter] = counts[letter] ? counts[letter] + 1 : 1;
  })
  str2.split('').forEach(letter=>{
    counts[letter] = counts[letter] ? counts[letter] -1 : -1;
  })
  const values = Object.values(counts)
  if(Math.min(...values)<0){
    return false;
  }else{
    return true;
  }
}

module.exports = scramble;
