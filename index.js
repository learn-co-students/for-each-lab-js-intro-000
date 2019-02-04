function iterativeLog(array) {
array.forEach((element, index, array) => {
  console.log(`${index}: ${element}`);
})}

function iterate(callback){
var odds = [1,3,5,7,9,11];
odds.forEach(callback);
return odds;
}

function doToArray (array, callback) {
array.forEach(callback);
}
