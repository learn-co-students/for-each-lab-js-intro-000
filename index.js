function iterativeLog(randomArray) {
  randomArray.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var newArray = [0, 2, 4, 6];
  newArray.forEach(callback);
  return newArray;
}

function doToArray(array, callback) {
  array.forEach(callback);
}