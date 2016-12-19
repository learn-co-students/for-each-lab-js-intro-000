function iterativeLog(array){
    array.forEach(function(item, index){
      console.log(`${index}: ${item}`);
    })
  }

function iterate(callback){
  var arr = ['i'];
  arr.forEach(callback);
  return arr;
}

function doToArray(arr, callback){
  arr.forEach(callback);
}
