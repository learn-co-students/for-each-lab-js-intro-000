function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var dogs =['lucky','spot','bow']
  dogs.forEach(callback)
  return dogs
}

function doToArray(array, callback) {
  array.forEach(callback)
}
