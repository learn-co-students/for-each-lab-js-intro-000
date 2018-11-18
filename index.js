function iterativeLog(array){
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  var random = [2, 5, 7]
  random.forEach(callback)
  return random
}

function doToArray(array, callback){
  array.forEach(callback)
}