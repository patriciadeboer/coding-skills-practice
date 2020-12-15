/*
Description:
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/

function splitStrings(str){
  let array = [];
  const length= str.length;
  for(let i=0;i<length;i++){
    if(i%2===1){
      let string = `${str[i-1]}${str[i]}`;
      array.push(string)
    }
  }
  if(length%2===1){
    array.push(`${str[length-1]}_`);
  }
  return array;
}

module.exports=splitStrings;
