
function iterativeLog(array) {
  array.forEach((element, index) => {
  console.log(`${index}: ${element}`)})
}

function iterate(callback) {
  var animals = ["dog", "cat", "rabbit"];
  animals.forEach(callback)
  return animals
}

function doToArray(array, callback) {
  array.forEach(callback)
}
