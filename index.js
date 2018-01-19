function iterativeLog(array) {
  array.forEach(element => {
    console.log(`${array.indexOf(element)}: ${element}`)
  });
};

function iterate(callback) {
  var array = [17, 38, 6, 7, 9];
  array.forEach(callback);
  return array;
};

function doToArray(array, callback) {
  array.forEach(callback);
};
