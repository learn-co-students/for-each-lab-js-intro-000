function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var dirtyprojectors = ['Dave', 'Amber', 'Angel'];
  dirtyprojectors.forEach(callback);
  return dirtyprojectors;
}

function doToArray(array,callback) {
  array.forEach(callback);
}
