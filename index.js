function iterativeLog(array) {
  array.forEach( (element, index) =>
    console.log(`${index}: ${element}`)
  )
}

function iterate(callback){
  var jawns = ["apple", "orange"]
  jawns.forEach(callback)
  return jawns
}

function doToArray(array, callback){
  array.forEach(callback)
}
