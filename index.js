function iterativeLog(array) {
  array.forEach(element => { console.log(`${index}: ${element}`);
  } );
}

function iterate(callback) {
  var a = ['a', 'b', 'c']
  a.forEach(callback);
  return a;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
