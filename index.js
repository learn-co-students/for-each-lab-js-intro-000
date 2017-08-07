function iterativeLog(array){
  array.forEach(function(element){
    console.log(`${array.indexOf(element)}: ${element}`)}); 
}
function iterate(callback) {
  let array = ["kittens","doge"];
  array.forEach(callback);
  return array;
}
function doToArray(array, callback) {
  array.forEach(callback);
}