function iterativeLog(arr) {
    arr.forEach(function(el) {
      console.log(`${arr.indexOf(el)}: ${el}`);
    });
}

function iterate(callback) {
  var arr = ["Nazim", "Rasul", "Roman"];
    arr.forEach(callback);
  return arr;
}

function doToArray(arr, callback) {
    arr.forEach(callback);
}