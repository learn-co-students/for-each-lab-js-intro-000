function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {

  var watches = ["Rolex", "Tissot", "Luminox"];

  watches.forEach(callback);

  return watches;
}

function doToArray(array, callback){
  array.forEach(callback);
}
