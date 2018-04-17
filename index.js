const array = [1, 2, 3];

function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  })
}


function iterate(callback) {
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  return array.forEach(callback);
}
