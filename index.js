function iterativeLog(array){
  array.forEach((element, index, array) =>
    console.log (`${index}: ${element}`))
}


function iterate(callback){
  let arr = [1,2,3,4,5];

  arr.forEach(callback);

  return arr;
}


function doToArray(array, callback){
  array.forEach(callback);
}
