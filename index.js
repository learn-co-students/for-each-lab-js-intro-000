function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  newArr = ['test', 'beer'];
  newArr.forEach(callback);
  return newArr;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
