function iterativeLog(array) {
  array.forEach((element, index) {
    console.log(`${index}: ${element}`);
  });
};

function iterate(callback) {
  var plants = ['tree', 'flower', 'grass'];
  plants.forEach(callback); //why can't be callback(plants)
  return plants;
};

function doToArray(array, callback) {
  array.forEach(callback); // why can't be callback(array)
}
