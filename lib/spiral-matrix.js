/*
  Print a given matrix in spiral form
  const inputMatrix = [
    [1, 2, 3, 4,  5],
    [6, 7, 8, 9, 10],
    [11,12,13,14,15],
    [16,17,18,19,20],
  ]

  const expectOutput = [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]
*/

//WIP
// const spiralMatrix =(matrix) =>{
//   console.log(matrix.length)
//   const numberRows=matrix.length
//   const outputMatrix= []
//   let currentRow = 0;
//   let currentColumn=matrix[0].length;
//   matrix.map((arr,idx)=>{
//     // const numberColumns=arr.length;
//     if(currentRow===idx){
//       arr.forEach(num=>outputMatrix.push(num))
//     }else if(idx===numberRows-currentRow-1){
//       // console.log('last row')
//       [...arr].reverse().forEach(num=>outputMatrix.push(num))
//     }else{

//       outputMatrix.push(arr[currentColumn-1])
//     }



//   })
//   console.log(outputMatrix)
// }

// spiralMatrix([
//   [1, 2, 3, 4,  5],
//   [6, 7, 8, 9, 10],
//   [11,12,13,14,15],
//   [16,17,18,19,20],
// ]);
