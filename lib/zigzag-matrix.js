/*
  Print a given matrix in zigzag form
  const inputMatrix = [
    [1, 2, 3, 4,  5],
    [6, 7, 8, 9, 10],
    [11,12,13,14,15],
    [16,17,18,19,20],
  ]

  const expectOutput = [ 1, 2, 3, 4, 5, 10, 9, 8, 7, 6, 11, 12, 13, 14, 15, 20, 19, 18, 17, 16 ]
*/

const zigzagMatrix =(matrix) =>{
  const outputMatrix= []
  matrix.forEach((arr,idx)=>{
    if(idx%2===0){
      arr.forEach(num=>outputMatrix.push(num))
    }else{
      [...arr].reverse().forEach(num=>outputMatrix.push(num))
    }
  })
  return outputMatrix
}

zigzagMatrix([
  [1, 2, 3, 4,  5],
  [6, 7, 8, 9, 10],
  [11,12,13,14,15],
  [16,17,18,19,20],
]);

module.exports = zigzagMatrix;
