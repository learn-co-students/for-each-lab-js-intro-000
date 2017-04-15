
function iterativeLog(array){
  array.forEach(callback);
  return array;
}

function callback(element, index, array){
  console.log (`${index}: ${element}`);
}

function iterate(callback){
  var array1 = ["dog", "fish", "cat"];
  array1.forEach(callback);
  return array1;
}

function doToArray(array2, callback) {
  array2.forEach(callback);
}
