function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const evenThrees = [2, 5, 8, 11]
  evenThrees.forEach(callback)
  return evenThrees
}

function doToArray(array, callback) {
  array.forEach(callback)
}
