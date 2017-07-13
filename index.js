function iterativeLog(arr){
  arr.forEach((ele, idx) => {
    console.log(`${idx}: ${ele}`)
  })
}

function iterate(callback){
  var arr = [1,2,3,4,5]
  arr.forEach(callback)
  return arr
}

function doToArray(arr, callback){
  arr.forEach(callback)
}
