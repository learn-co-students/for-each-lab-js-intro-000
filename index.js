function iterativeLog(array) {
  array.forEach(function (element, index, array) {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var arr = [1,2,3, "sam", 5,6,7,8,9]
  arr.forEach(arr => {
    callback(arr)
  })
  return arr
}

function doToArray(array, callback) {
  array.forEach(array => {
    callback(array)
  })
}