function iterativeLog(arr) {
  arr.forEach(function(element, index) {
    console.log(`${index}: ${element}`);
  })
}

function iterate(x) {
  var arr = ["dog", "cat", "pig"];
  arr.forEach(x);
  return arr;
}

function doToArray(arr, x) {
  arr.forEach(x);
}
