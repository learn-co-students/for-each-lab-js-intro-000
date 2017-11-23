function iterativeLog(array) {
  array.forEach(function(element,index) {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var watches = ['AP','PP','VC']
  watches.forEach(callback)
  return watches
}

function doToArray(array, callback){
  array.forEach(callback)
}
