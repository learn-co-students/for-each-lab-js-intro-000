
function iterativeLog(array){
  array.forEach((element, index)=> {
    console.log(`${index}: ${element}`)
  })
}


function iterate(callback){
  const pieces = ['King', 'Queen', 'Rook', 'Bishop', 'Knight', 'Pawn'];

  pieces.forEach(callback)

  return pieces;
}



function doToArray(array, callback) {
  array.forEach(callback)
}




//
//
// function iterate(callback){
//   var pieces = ['King', 'Queen', 'Rook', 'Bishop', 'Knight', 'Pawn'];
//
//   pieces.forEach(callback){
//     return pieces;
//   }
// }
//
// function doToArray(array, callback){
//   array.forEach(callback);
// }
