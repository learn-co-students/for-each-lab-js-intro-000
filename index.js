function iterativeLog(array){
  array.forEach((element, index) => {console.log(`${index}: ${element}`)})
}

function iterate(callback){
  var odds = [1, 3, 5, 7, 9];
  odds.forEach(callback);
  return odds
}

function doToArray(array, callback){
  array.forEach(callback)
}
