function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var khCharacters = ['sora', 'kairi', 'riku', 'ven', 'aqua', 'terra'];
  khCharacters.forEach(callback);
  return khCharacters
}

function doToArray(array, callback) {
  array.forEach(callback)
}