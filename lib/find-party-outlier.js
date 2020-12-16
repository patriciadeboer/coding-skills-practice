/*
Description:
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

function findOutlier2(integers){
  //your code here
  const odd= integers.filter(int=>int%2===1||int%2===-1)
  const even= integers.filter(int=>int%2===0)
  return even.length===1? even[0] : odd[0];
}

function findOutlier(integers){
  let odd =[];
  let even =[];
  for(let i=0;i<integers.length;i++){
    let int = integers[i]
    if(int%2===0){
      even.push(int)
    }else{
      odd.push(int)
    }
    if(odd.length===1&&even.length>1){
      return odd[0]
    }else if(odd.length>1&&even.length===1){
      return even[0]
    }

  }
}

module.exports = findOutlier;
