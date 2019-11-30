function iterativeLog(array){
  array.forEach((element,index,array) => {
    debugger;
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback){
  var iterateArray=[1,2,3];
  iterateArray.forEach(callback);
  return iterateArray
}

function doToArray(array,callback){
array.forEach(callback)
}
