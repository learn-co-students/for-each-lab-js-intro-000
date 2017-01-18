function doToArray (array, callback) {
  array.forEach(callback)
}
function iterate(callback) {
  var arrayIterate = ['a', 'b'];
  arrayIterate.forEach(callback)
  return arrayIterate
}
function iterativeLog (array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}
