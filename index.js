function iterativeLog(array) {
  array.forEach((element, index) => {
  console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var Array = ['foofoo'];
  Array.forEach(callback);
  return Array
}


function doToArray(array, callback) {
  array.forEach(callback)
}
