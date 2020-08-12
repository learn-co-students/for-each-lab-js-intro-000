function iterativeLog(array) {
  array.forEach((element, index) => {console.log(`${index}: ${element}`)});
}

var animal = ["dog", "cat", "fish"];
iterativeLog(animal);

function iterate(callback) {
  let animal = ["dog", "cat", "fish"];
  animal.forEach(callback);
  return animal;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
