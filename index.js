function iterativeLog(array){
  array.forEach(
    console.log(`${index}: ${element}`);
  );
}

function iterate(callback){
  var array = [1, 3, 7, 8, 12];
  array.forEach(element, index);
  return array;
}

function doToArray(array, callback){
  array.forEach(callback);
}
