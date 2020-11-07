function iterativeLog(arr) {
  arr.forEach((element, index) => console.log(`${index}: ${element}`));
}

function callback(index, element, arr) {
  arr[index] = `${index + 1}: ${element}`
}

function iterate(callback) {
  let arr = ['JJO', 'SC', 'JSJ', 'JCJ'];
  arr.forEach(callback)
  return arr;
}

function doToArray(array, myFunc) {
  array.forEach(myFunc);
}