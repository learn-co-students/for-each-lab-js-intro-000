function iterativeLog(array){
  array.forEach((element, ind) => {console.log(`${ind}: ${element}`)})
}

function iterate(callback){
  var array = ["REM"]
  array.forEach(callback)
  return array
}

function doToArray(array, callback){
  array.forEach(callback)
}