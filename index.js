function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(index + ": " + element)
  })
}

function iterate(callback) {
var internal = ['x', 'y', 'z']
internal.forEach(callback)
return internal
}

function doToArray(array, callback) {
  array.forEach(callback)
}
