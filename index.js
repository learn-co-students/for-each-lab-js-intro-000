function iterativeLog(array) {
  let index = 0
  array.forEach(function(element) {
    console.log(`${index}: ${element}`);
    index++;
  });
}

function iterate(callback) {
  var array1 = [2, 4, 6, 8];
  array1.forEach(callback);
  return array1;

}

function doToArray(array, callback) {
  array.forEach(callback);
}
