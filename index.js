/*function iterativeLog(array) {
  array.forEach(function (index, element) {
    console.log(`${index}: ${element}`);
    });
}*/

function iterativeLog(array) {
  array.forEach(function (element, index) {
    console.log(`${index}: ${element}`);});}

function iterate(callback) {
  var songs = ["this", "that"];
  songs.forEach(callback);
  return songs;
}

function doToArray(array, callback) {
  array.forEach(callback) }
