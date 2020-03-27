function iterativeLog(arr) {
  arr.forEach((x, idx) => console.log(`${idx}: ${x}`))
}

function iterate(callback) {
  let arr = ['1','2','3']
  arr.forEach(callback)
  return arr
}

function doToArray(arr, callback) {
  arr.forEach(callback)
}