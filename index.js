function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var pets = ['dog', 'cat', 'parrot', 'bear']

  pets.forEach(callback)

  return pets
}

function doToArray(array, callback) {
  array.forEach(callback)
}
