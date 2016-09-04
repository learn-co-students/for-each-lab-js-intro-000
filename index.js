function iterativeLog(array) {
  array.forEach(function (element, index) {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const woodwinds = ["clarinet", "oboe", "bassoon", "saxophone"]

  woodwinds.forEach(callback)

  return woodwinds
}

function doToArray(array, callback) {
  array.forEach(callback)
}
