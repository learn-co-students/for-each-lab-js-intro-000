function iterativeLog(array){
  array.forEach((even, index, array) => {
  console.log(`${index}: ${array[index]}`);
});
}
function iterate(callback){
  var array = [1, 2, 3]
  array.forEach(callback)
  return array
}
function doToArray(array, callback){
  array.forEach(callback)
}
