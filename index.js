function iterativeLog(array) {
  array.forEach(element => {
    console.log(`${array.indexOf(element)}: ${element}`);
  });
}

function iterate(callback) {
  var listy = ['a','b','c'];
  listy.forEach(callback);
  return listy;
}

function doToArray(array,callback) {
  array.forEach(callback);
}
