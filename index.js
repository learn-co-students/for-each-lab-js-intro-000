function iterativeLog(array){
  array.forEach((element, index) => {
    // debugger;
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  var catsArray = ['Felix', 'Garfield', 'Grumpy Cat', 'Lil Bub', 'Sylvester', 'Tom'];
  catsArray.forEach(callback);
  return catsArray;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
