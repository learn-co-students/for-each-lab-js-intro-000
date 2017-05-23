

function callback(element, index, array){

  console.log(`${index}: ${element}`);
}

function iterativeLog(array){
  array.forEach(callback);
}

function iterate(callback){
  var internalArray = ["cano", "gatto", "ugello"];
  internalArray.forEach(callback);
  return internalArray;
}

function doToArray(array, callback){
  array.forEach(callback);
}
