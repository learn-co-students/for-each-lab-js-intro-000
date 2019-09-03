function iterativeLog(array) {
  array.forEach((element, item) => {
    console.log(`${item}: ${element}`)
  })
}

function iterate(callback) {
    var threats = [`lions`, `tigers`, `bears`];
    threats.forEach(callback);
    return threats
}

function doToArray(array, callback) {
  array.forEach(callback);
}
