function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var iterable = [1, 2, 3, 4];
  iterable.forEach(callback);

  return iterable;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
