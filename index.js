function iterativeLog (array) {
  array.forEach((element, index) => {
  console.log(`${index}: ${element}`);
});
}

function iterate (callback) {
  const x = [2, 3, 4]
  x.forEach(callback)
  return x
  }
  //

function doToArray (array, callback) {
  array.forEach(callback)
}
