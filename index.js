function iterativeLog(array){
  array.forEach(console.log(`${index}: ${element}`))
}

function iterate(callback){
  var week = ["Monday", "Tuesday", "Wednesday", "Thursday"]
  return week.forEach(callback)
}

function doToArray(array, callback){
  array.forEach(callback)
}
