function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const coffee = ["starbucks", "DD", "panera"]
  coffee.forEach(callback)
  return coffee
}

function doToArray(array, callback) {
  array.forEach(callback)
}

