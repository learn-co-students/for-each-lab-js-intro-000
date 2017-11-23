function iterativeLog(arr) {
  arr.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var animals = ["dog", "fish", "cat"]
  animals.forEach(callback)
  return animals
}

function doToArray(arr, callback) {
  arr.forEach(callback)
}
