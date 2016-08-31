function iterativeLog(arr){
  arr.forEach(function(value, index){
    console.log(`${index}: ${value}`)
  })
}

function iterate(callback){
  var n = ['pork','beans'];
  n.forEach(callback);
  return n;
}

function doToArray(array, callback){
  array.forEach(callback);
}
