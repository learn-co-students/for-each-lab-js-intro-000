function iterativeLog(array) {
  array.forEach((element, index, arrayEach) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var array = ["Donut", "Pizza", "Salad"]

  array.forEach (callback)

  return array
}

function doToArray(array, callback) {
  array.forEach (callback)
}
