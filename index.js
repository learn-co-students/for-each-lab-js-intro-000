function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var array = new Array([a, b, c, d, e, f])
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
