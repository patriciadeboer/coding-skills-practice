/*

*/

function toWeirdCase(string){
  return string.split(' ').map((word)=>{
    return word.split('').map((letter,idx)=>{
      if(idx%2===0){
        return letter.toUpperCase()
      }else{
        return letter.toLowerCase()
      }
    }).join('');
  }).join(' ');
}

module.exports= toWeirdCase;

toWeirdCase('This is exciting');
