function iterativeLog(array) {
  array.forEach((index, element) => {
    console.log(`${index}: ${element}`)
  });
}

function iterate(callback){
  var music = ["rock", "pop", "electronic"];

  music.forEach(callback);

  return music;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
