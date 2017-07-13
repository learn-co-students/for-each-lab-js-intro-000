function iterativeLog(array) {
  var s = ""
  array.forEach( (element, index) => {
    console.log(`${index}: ${element}`)
    s += `${index}: ${element},`
  })
  return s
}


function iterate(callback) {
  var pets = ['horse']

  pets.forEach(callback)

  return pets
}

function doToArray(array, callback) {
  array.forEach(callback)
}
