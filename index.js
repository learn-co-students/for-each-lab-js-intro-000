function iterativeLog(arr) {
  arr.forEach(
    (element, index) =>
    console.log(`${index}: ${element}`)
  )
}

function iterate(callback) {
  arr = ["Honda", "Toyota", "Buick"]
  arr.forEach(callback)
  return arr
}

function doToArray(arr, callback) {
  arr.forEach(callback)
}
