function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  })
}

var odds = [1,3,5,7,9]
function iterate(callback) {
  odds.forEach(callback)
  return odds;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
