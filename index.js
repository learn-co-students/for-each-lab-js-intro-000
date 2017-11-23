function iterativeLog(array) {
  array.forEach((value, key) => {
    console.log(`${key}: ${value}`)
  })
}

function iterate(callback) {
  const colors = ["blue", "red", "orange", "yellow"]

  colors.forEach(callback)

  return colors
}

function doToArray(array, callback) {
  array.forEach(callback)
}
