function iterativeLog(array) {
  array.forEach(function logout(element, index, array) {
    console.log(`${index}: ${element}`);
  });
};

function iterate(callback) {
  var plants = ['tree', 'flower', 'grass'];
  plants.forEach(callback);
  return plants;
};

function doToArray(array, callback) {
  array.forEach(callback);
}
