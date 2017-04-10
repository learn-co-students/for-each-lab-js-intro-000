function iterativeLog(array) {
  array.forEach(function(element,index){console.log(`${index}: ${element}`)})
}

function iterate(callback){
  var xarray = ["cat","dog","fish"]
  xarray.forEach(callback)
  return xarray
}

function doToArray(array, callback){
  array.forEach(callback)
}