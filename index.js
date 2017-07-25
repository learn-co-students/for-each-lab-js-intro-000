function iterativeLog(array) {
  array.forEach(function(element, index, array) {
    console.log(`${index}: ${element}`);
  });
};

function iterate(callback) {
  var array = ['surf', 'ball', 'golf'];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
