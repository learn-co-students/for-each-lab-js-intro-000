function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`)
  });
}

function iterate(callback) {
  var arr = [1];
  arr.forEach(function(element) {
    callback(element);
  });
  return arr;
}

function doToArray(array, callback) {
  array.forEach(function(element) {
    callback(element);
  });
}
