function iterativeLog(array) {
  array.forEach(element, index, array) => {console.log(`${index}: ${element}`)}
}

* evens.forEach(even => {
*   console.log(`${even} is not odd!`);
* });

function iterate(callback){
  array = [1, 2, 4];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback){
  array.forEach(callback)
}
