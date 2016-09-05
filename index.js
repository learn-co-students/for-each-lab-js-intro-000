function log(element, index) {
  console.log(`${index}: ${element}`)
}

function iterativeLog(array) {
  array.forEach(log)
}

function iterate(callback){
  var array = [9,8,7,6,5,4,3,2,1]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
