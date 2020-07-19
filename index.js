
function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  });

}

function iterate(callback) {
  var array = [10, 20, 30, 40];
  array.forEach(callback);

  return array

}

function doToArray(array, callback) {
  array.forEach(callback);
}


// var evens = [0, 2, 4, 6, 8, 10];
// 
// function doToEvens(callback) {
//   evens.forEach(callback);
// }
//
// function doToElementsInArray(array, callback) {
//   array.forEach(callback);
// }
