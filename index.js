function iterativeLog(array){
  // var i = 0;
  // array.forEach(element => {
  // console.log(`${i++}: ${element}`);}
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  });
}
function iterate(callback){
  var array = [10,11,12];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback){
  array.forEach(callback);
}
