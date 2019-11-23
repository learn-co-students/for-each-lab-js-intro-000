function iterativeLog(array){
  array.forEach(
    element => console.log(`${array.indexOf(element)}: ${element}`)
)}


function iterate(callback){
  var arr = ["alpha"];
  arr.forEach(callback);
  return arr;
}

function doToArray(array, callback){
  array.forEach(callback);
}