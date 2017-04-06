function iterativeLog(array) {
  array.forEach( index => {
  console.log(`${index}: ${element}`)})
}

function iterate(callback) {
  var array = [];
  array.forEach(callback)
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback)
}