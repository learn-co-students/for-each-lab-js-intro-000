function iterativeLog(array) {
  array.forEach(function (element, index) {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var sampArr = [4, 5, 7, 8];
  sampArr.forEach(callback);
  return sampArr;
}

// iterate(forEach(function (array) {
//   return array;
// });)

function doToArray(array, callback) {
  array.forEach(callback);
}
