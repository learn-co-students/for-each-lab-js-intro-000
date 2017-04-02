function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  var array = ['thing 1', 'thing 2']
  array.forEach(element => {
    callback(element)
  })
  return array
}

function doToArray(array, callback) {
  array.forEach(element => {
    callback(array)
  })
}