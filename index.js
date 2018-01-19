/*function iterativeLog(array){
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  })
}*/

function iterativeLog(array){
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback){
  var arr = ["heres", "some", "stuff"];
  arr.forEach(callback);
  return arr;
}

function doToArray(array, callback){
  array.forEach(callback);
}
