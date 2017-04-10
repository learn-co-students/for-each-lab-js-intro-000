function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}



function iterate(callback) {
  var greetings = ["hi", "how are you", "some weather, huh?"];
  greetings.forEach(callback);
  return greetings
}

function doToArray(array, callback) {
  array.forEach(callback);
}