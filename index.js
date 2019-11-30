function iterativeLog(array){
  array.forEach(function (element, index){
    console.log(`${index}: ${element}`);

  })
}

function iterate(callback){
  let arr = ["cats", "dogs", "birds"];
  arr.forEach(callback);
  return arr;
}
function doToArray(array, callback){
  array.forEach(callback);
}
