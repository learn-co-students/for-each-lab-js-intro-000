function iterativeLog(array) {
  array.forEach( (index, element) => {
    console.log(`${index}: ${element}`)
})

function iterate(callback) {
  var newArray = [abc, def, ghi];
  newArray.forEach(callback);
  return newArray
}

function doToArray(array, callback) {
  array.forEach(callback)
}
