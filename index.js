function iterativeLog(array){
  array.forEach(function(element, index){
    console.log(`${index}: ${element}`)
  })
  //array.forEach(console.log(`${index}: ${element}`))
}

function iterate(callback){
  var week = ["Monday", "Tuesday", "Wednesday", "Thursday"]
  week.forEach(callback)
  return week
}

function doToArray(array, callback){
  array.forEach(callback)
}
