function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  dogNicknames = ['Ruby', 'Goobins', 'Pupperino'];
  dogNicknames.forEach(callback);
  return dogNicknames;
}

function doToArray(array, callback) {
  array.forEach(callback);
}