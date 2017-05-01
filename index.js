function iterativeLog(array) {
  array.forEach((element, index) => {
  console.log(`${index}: ${element}`)})
}

function iterate(callback) {
  var pups = ["maru", "maddie", "bene"]
  pups.forEach(callback)
  return pups
}

function doToArray(array, callback) {
  array.forEach(callback)
}
