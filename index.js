function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const food = ["Pizza", "Burgers", "PBJ"]

  food.forEach(callback)

  return food
}

function doToArray(array, callback) {
  array.forEach(callback)
}
