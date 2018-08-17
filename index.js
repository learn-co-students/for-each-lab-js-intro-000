function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
var animals = ["dog", "cat", "rhino"];
animals.forEach(callback)
return animals
}

function doToArray(array, callback) {
 array.forEach(function(element) {
callback(element)
 })
}
