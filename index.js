function iterativeLog(array){
array.forEach(function(element, index){
  console.log(`${index}: ${element}`)
});
}

function iterate(callback){
  var arr = ["Neena", 38]
  arr.forEach(callback)
  return arr;
}


function doToArray(array, callback){
 array.forEach(callback);
}
