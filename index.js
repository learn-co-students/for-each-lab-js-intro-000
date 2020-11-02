function iterativeLog (array) {
  array.forEach(
    console.log(`${index}: ${element}`)
}

function iterate(callback){
  var iterateArray = [1,3,5,7,9]
  iterateArray.forEach(iterativeLog)
  return iterativeArray
}

function doToArray (array, callback) {
  array.forEach(callback)
}
