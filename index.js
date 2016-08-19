function iterativeLog(array) {
  array.forEach((index, element) => {
    console.log(`${element}: ${index}`)
  })
}

function iterate(callback) {
  const colors = ["blue", "green", "yellow"]
  colors.forEach(callback)
  return colors
}


function doToArray(array, callback) {
  array.forEach(callback)
}
