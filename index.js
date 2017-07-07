function iterativeLog(array) {
  array.forEach((el, i) => {
    console.log(`${i}: ${el}`)
  })
}

function iterate(callback) {
  var arr = ['lol','kek','cheburek'];
  arr.forEach(callback);
  return arr;
}

function doToArray(array,callback) {
  array.forEach(callback);
}
