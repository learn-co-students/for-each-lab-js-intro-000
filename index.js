function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const pets = ["dogs", "cats", "gerbils"]

  pets.forEach(callback)

  return pets
}

function doToArray(array, callback) {
  array.forEach(callback)
}