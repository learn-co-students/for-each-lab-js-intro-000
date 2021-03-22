function iterativeLog(arr){
  arr.forEach((elem, index) => {
    console.log(`${index}: ${elem}`);
  });
}

function iterate(callback){
  var arr = ['hello', 'buy', 'see you'];
  arr.forEach(callback)
  return arr;
}

function doToArray(arr, callback){
  arr.forEach(callback);
}
