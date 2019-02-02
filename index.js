function iterativeLog(array){
  array.forEach(console.log(`${[index]}: ${element}`));

}

function iterate(callback){
  let array = ['apple', 'straberries', 'bananas'];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback){
  array.forEach(callback);

}
