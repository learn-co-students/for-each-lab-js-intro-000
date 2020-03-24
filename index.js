function iterativeLog(array) {
  array.forEach(callbackLog)
}

function callbackLog (element, index, array){
  console.log(`${index}: ${element}`);
}

function iterate(callback) {
  var artists = ["Picasso", "Da Vinci", "Van Gogh", "Monet", "Cezanne", "Renoir"];
  artists.forEach(callback);
  return artists;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
