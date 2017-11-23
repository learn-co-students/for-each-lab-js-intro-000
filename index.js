
function callback(element, index){
  console.log(`${index}: ${element}`)
}

function iterativeLog(array) {
  array.forEach(callback);
}

function iterate(callback){
  var array = [6,4,1,7,4,7,3,2,6,9]
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
    array.forEach(callback);
}
