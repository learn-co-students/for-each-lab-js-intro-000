function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  var items = ['apple', 'pear', 'banana'];
  items.forEach(callback);
  return items;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
