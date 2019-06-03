function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var evens = [0, 2, 4, 6, 8, 10];
  evens.forEach((element, index, array) => {
    callback(element);
  });
  return evens
}

function doToArray(array, callback) {
  array.forEach((element, index, array) => {
    callback(iterativeLog);
  });
  return array
}
