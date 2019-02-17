function iterativeLog(array){
  array.forEach((element,index,array) => {
    console.log( `${index}: ${element}`);
  });
}

function iterate(callBackFn){
  var array = new Array(1,2,3,4,5);
  array.forEach(callBackFn);
  return array;
}

function doToArray(array, callback){
  array.forEach(callback)
}
