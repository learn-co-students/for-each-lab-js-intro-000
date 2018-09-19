function iterativeLog(array) {
  array.forEach((el, i) => {
  console.log(`${i}: ${el}`)
  })
}
function iterate(callback) {
  var mex = ["taco", "burrito", "carnitas"]
  mex.forEach(callback)

  return mex
}
function doToArray(array, callback) {
  array.forEach(callback)
}
