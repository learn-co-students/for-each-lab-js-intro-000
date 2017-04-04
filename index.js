function iterativeLog(array){
  array.forEach((currentValue, index, array) => {
    console.log(`${index}: ${currentValue}`)
  })
}

function iterate(callback){
  var array = ["heather", "tommy", "mom", "dad"]
  array.forEach(callback)
  return array
}

function doToArray(array, callback){
  array.forEach(callback)
}
