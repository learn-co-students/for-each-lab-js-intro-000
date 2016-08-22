function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var foods = ["pizza", "brownies", "mac & cheese"];
  foods.forEach(callback);
  return foods;
}

function doToArray (array, callback) {
  array.forEach(callback)
}
