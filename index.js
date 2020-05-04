function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const fruit = ["Mango", "Pineapple", "Starfruit"]

  fruit.forEach(callback)

  return fruit
}

function doToArray(array, callback) {
  array.forEach(callback)
}
