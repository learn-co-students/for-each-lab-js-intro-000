function iterative(array){
  array.forEach((element,index) => {console.log(`${index}: ${element}`)})
}

function iterate(callback){
  new_array = [1,2,3,5,7,8,"Stop",10];
  new_array.forEach(callback);
  return new_array;
}
function doToArray(array, callback){
  array.forEach(callback);
}
