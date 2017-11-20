function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var foods = ["pizz", "pasta", "ramen"];
  foods.forEach(callback);
  return foods;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
