function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  });

}

function iterate(callback) {
  var numbers1to5 = [1, 2, 3, 4, 5];
  numbers1to5.forEach(callback);
  return numbers1to5;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
