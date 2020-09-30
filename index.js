function iterativeLog(array) {
  let index = 0;
  element = array[index];
  array.forEach((index, element) => {
    console.log(`${index}: ${element}`);
    element += 1;
  });
}

function iterate(callback) {
  let array = [1, 2, 3];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}