/*
  Find a maximum consecutive repeating char in a given string

  let str = 'bbbaaaaccadd'; // max repeating char is 'a' with count 4
*/

const consecutiveChar = (string)=>{
  const arr = string.split('')
  let maxCount = 1;
  let currentCount=1;
  let maxChar;
  arr.forEach((char,idx)=>{
    if(char===arr[idx-1]){
      currentCount++;
      if(maxCount<currentCount){
        maxCount=currentCount;
        maxChar = char;
      }
    }else{
      currentCount=1;
    }
  })
  return `Max repeating char is ${maxChar} with count ${maxCount}`
}

const answer = consecutiveChar('bbbaaaaccadd');
console.log(answer)

module.exports = consecutiveChar;
