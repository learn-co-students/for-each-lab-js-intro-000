function iterativeLog(array){
  array.forEach(console.log(${index}: ${element}))
}

function functionName(callback) {
  var arrayTest = [1,2,3,4]
  arrayTest.forEach(callback)
  return arrayTest
}

function doToArray(array, callback) {
  array.forEach(callback)
}
