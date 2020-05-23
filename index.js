function iterativeLog(array) {
  array.forEach((element, index)=> {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  var sample = [1, 2, 3, 4, 5];
  sample.forEach(callback);
  return sample;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
