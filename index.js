function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var gods = ["Brahma", "Vishnu", "Shiva"];

  gods.forEach(callback);

  return gods;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
