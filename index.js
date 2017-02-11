function mylog(element, index) {
  console.log(`${index}: ${element}`)
}
function iterativeLog(array){
  array.forEach(mylog)
}

function iterate(callback){
  var newArray = new Array("r", "v", 1);
  newArray.forEach(callback);
  return newArray;
}

function doToArray(array, callback){
  array.forEach(callback);
}