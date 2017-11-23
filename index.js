function iterativeLog(array) {
  array.forEach(function (ele, idx, arr) {
    console.log(`${idx}: ${ele}`);
  });
}


function iterate(callback) {
  var arr = ["Panther-Winfield", "nahhh"];
  arr.forEach(callback);
  return arr;
}


function doToArray(array, callback) {
  array.forEach(callback);
}
