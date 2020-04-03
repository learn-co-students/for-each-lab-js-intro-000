function iterativeLog(arr) {
  arr.forEach((ele, idx) => {
    console.log(`${idx}: ${ele}`)
  })
}

function iterate(cb) {
  var arr = [1,2,3,4]
  arr.forEach(cb)
  return arr
}

function doToArray(arr, cb) {
  arr.forEach(cb)
}
