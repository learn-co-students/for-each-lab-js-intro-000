function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var rappers = ["biggie","tupac"];
  rappers.forEach(callback);
  return rappers;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
