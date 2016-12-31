function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var newArr = ['1', 'bl', 'asdklfj'];
  newArr.forEach(callback);
  return newArr;
}

function doToArray(arr, callback) {
  arr.forEach(callback);
}
