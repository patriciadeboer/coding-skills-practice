/*
  Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

  Use the Parameter Testing feature in the box below to test your code with different arguments.

*/

//Old solution
// function DashInsert(str) {

//   // code goes here
//   let dashStr=str[0];
//   for(let i=1;i<str.length;i++){
//       if(str[i]%2===1&&str[i-1]%2===1){
//           dashStr+="-"+str[i]
//       }else{
//           dashStr+=str[i]
//       }

//   }

//   return dashStr;
// }

function DashInsert(str) {

  // code goes here
  return str.split('').map((num,idx)=>{
    if(parseInt(num,10)%2===1&&parseInt(str[idx-1],10)%2===1){
      return `-${num}`
    }
    return num
  }).join('')

}

module.exports = DashInsert;
