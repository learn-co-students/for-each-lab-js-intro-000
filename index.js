function iterativeLog(array) {
  array.forEach((el, i) => {
    console.log(`${i}: ${el}`)
  })
}

function iterate(callback) {
  const bears = ["Polar Bear", "Panda Bear", "Black Bear"]

  bears.forEach(callback)

  return bears
}

function doToArray(array, callback) {
  array.forEach(callback)
}
