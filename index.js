function iterativeLog(array) {
  array.forEach(function(value,index,array) {
    console.log(`${index}: ${value}`);
  });
}

function iterate(callback) {
  var nums = [1, 2, 3, 4, 5];
  nums.forEach(callback);

  return nums;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
