function iterativeLog(array) {
  var index = 0;
  array.forEach(element => {
    console.log(`${index}: ${element}`)
    index++;
  });
};

function iterate(callback) {
  var myName = ['Tirapat', 'Numsin'];
  myName.forEach(callback);
  return myName;
};

function doToArray(array, callback) {
  array.forEach(callback)
};
