function iterativeLog(array){
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback){
  oneThroughSix = [1, 2, 3, 4, 5, 6];
  oneThroughSix.forEach(callback);
  return oneThroughSix;
}

function doToArray(array, callback){
  array.forEach(callback);
}
