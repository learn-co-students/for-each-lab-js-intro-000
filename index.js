function iterativeLog(array){
  array.forEach(log);

  function log (element, index, array){
    console.log(`${index}: ${element}`);
  }
}

function iterate(callback){
  var A = [1,2,3];
  A.forEach(callback);
  return A;
}

function doToArray(array, callback){
  array.forEach(callback);
}
