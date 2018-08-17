function iterativeLog(array) {
  array.forEach(console.log(`${index}: ${element}`));
}

function iterate(callback) {
  let initalArray = [Apples, Oranges, Strawberries, Blackberries, Bananas];
  initalArray.forEach(callback);
}

function doToArray(array, callback){
  array.forEach(callback);
}