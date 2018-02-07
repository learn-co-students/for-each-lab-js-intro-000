function iterativeLog(array) {
  array.forEach((element, index) => {
      console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  let myArray = ["hey!", 3, 5];

  myArray.forEach(callback);
  return myArray;
}

function doToArray(array, callback) {
  array.forEach(callback);

}
