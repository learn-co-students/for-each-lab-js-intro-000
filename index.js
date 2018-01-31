function iterativeLog(array) {
  array.forEach(callback);
}

function callback(element, index, array) {
  console.log(`${index}: ${element}`);
}

function iterate(callback) {
  let v = ['Alpha', 'Bravo', 'Charlie'];

  v.forEach(callback);
  return v;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
