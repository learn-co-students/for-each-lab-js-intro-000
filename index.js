function iterativeLog(array) {
  array.forEach(function callback(index, array) {
    console.log(array + ': ' + index);
  });
}

function iterate(callback) {
  var arr = ['apples', 'oranges'];
  arr.forEach(function(element) {
    callback();
  });
  return arr;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
