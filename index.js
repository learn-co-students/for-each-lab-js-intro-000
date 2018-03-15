function iterativeLog(array){
array.forEach(function(element,index) {
  console.log(`${index}: ${element}`)
})
}

function iterate(callback){
  var stuff = [1,2,3]
  stuff.forEach(callback)
  return stuff
}

function doToArray(array,callback){
  array.forEach(callback)
}
