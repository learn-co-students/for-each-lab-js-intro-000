function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })  
}

function iterate(callback) {
  var list = ["blue", "purple", "orange", "green"]
  
  list.forEach(callback)
  return list
}

function doToArray(array, callback){
  array.forEach(callback)
}