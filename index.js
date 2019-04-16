function iterativeLog(arr) {
  arr.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  let arr = ["cat", "dog", "horse"];
  arr.forEach(callback);
  return arr;
}

function doToArray(arr, callback) {
  arr.forEach(callback);
}
