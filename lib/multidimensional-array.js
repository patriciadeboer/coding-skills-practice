/*
  Given a multidimensional array with depth of n, flatten it. Once flattened make it available as a method on array instance

  Example: [1,2,[3,4]] -> [1,2,3,4]
*/

const flattenArray = (arr, input=[]) =>{
  const arrayUpdate=input;
  arr.forEach((currentValue)=>{
    if(!isNaN(currentValue)){
      arrayUpdate.push(currentValue)
    }
    if(Array.isArray(currentValue)){
      flattenArray(currentValue,arrayUpdate)
    }
  })
  return arrayUpdate
}

if (!Array.prototype.flatten) {
  Array.prototype.flatten = function() {
    return flattenArray(this)
  }
}

module.exports=flattenArray;

const answer1=flattenArray([1,2,[3,4]]);
// console.log(answer1)
const answer2=flattenArray([[1, 2],[3, 4, [5, 6 ,[7, 8], 9]],[10 ,[11, 12]]]);
// console.log(answer2)
let arr = [1,2,[3,4]]
arr.flatten()

