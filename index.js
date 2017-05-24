function iterativeLog(array){
  array.forEach(log);
}
function log(element, index){
  console.log(`${index}: ${element}`);
}
function iterate(callback){
  array = ["test"];
  array.forEach(callback);
  return array;
}
function doToArray(array, callback){
  array.forEach(callback);
}
