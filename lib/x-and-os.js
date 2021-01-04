/*
Ex Oh

Have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.

*/


// // Previous Solution
// function ExOh(str) {

//   // code goes here
//   str=str.toLowerCase();
//   numO=0;
//   numX=0;

//   for(let i=0;i<str.length;i++){
//       if(str[i]==='o'){
//           numO++;
//       }else if(str[i]==='x'){
//           numX++;
//       }
//   }

//   if(numO===numX) return "true";

//   return "false";

// }

function ExOh(str) {
  let numX=0;
  let numO=0;
  str.split('').forEach(char=>{
    char.toLowerCase()==='x' ? numX++ : numO++
  })
  return numX===numO ? true : false
}

module.exports = ExOh
