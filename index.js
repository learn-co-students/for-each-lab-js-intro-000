function iterativeLog(array) {
  array.forEach((e, i) => {
    console.log(`${i}: ${e}`)
  })
}

function iterate(callback) {
  var internal = ["one", "two", "three"]
  internal.forEach(callback)
  return internal
}

function doToArray(array, callback) {
  array.forEach(callback)
}
