function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  let bands = ["The Strokes", "Pond", "The Beatles"]
  bands.forEach(callback)
  return bands
}

function doToArray(array, callback) {
  array.forEach(callback)
}
