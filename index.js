function iterativeLog(array) {
  array.forEach((el, i) => {
    console.log(`${i}: ${el}`)
  });
}

function iterate(callback) {
  const arr = ['cheese', 1, true];

  arr.forEach(callback);

  return arr;
}

function doToArray(arr, callback) {
  arr.forEach(callback);
}
