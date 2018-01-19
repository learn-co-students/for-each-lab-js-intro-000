function iterativeLog(array) {
  array.forEach(callback)
}
function callback(element, index, array) {
  var index;
  var element;
  console.log(`${index}: ${element}`)
}

function iterate(callback) {
  var array = ['cats', 'dogs'];
  array.forEach(callback)
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback)
}
