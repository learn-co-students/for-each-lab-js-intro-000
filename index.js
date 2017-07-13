function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var confederations = ["Mexico", "Portugal", "Cameroon", "Chile"]

  confederations.forEach(callback)

  return confederations
}

function doToArray(array, callback) {
  array.forEach(callback)
}
