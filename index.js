function iterativeLog(array) {
  array.forEach(function(item, index) {
    console.log(`${index}: ${item}`);
  })
}

function iterate(callback) {
  var array = [];
  callback(array);

  return array;
}

function doToArray(array, callback) {
  array.forEach(function(item) {
    callback(item);
  });
}
