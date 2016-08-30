function iterativeLog(array) {
  array.forEach((element, index) => {console.log(`${index}: ${element}`)});
}

function iterate(callback) {
  var anyArr = ['aaa', 'b', 'ddd'];
  anyArr.forEach(callback);
  return anyArr;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
