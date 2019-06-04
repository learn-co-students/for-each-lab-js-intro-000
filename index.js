function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback){
  var primeNumbers = [2, 3, 5, 7, 11];
  primeNumbers.forEach(callback);
  return primeNumbers;
}

function doToArray(array, callback){
  array.forEach(callback);
}