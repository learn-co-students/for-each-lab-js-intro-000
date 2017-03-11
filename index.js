function iterativeLog(array) {
  array.forEach((element, name) => {
    console.log(`${name}: ${element}`)
  });
}

function doToArray(array, callback) {
  array.forEach(callback);
}
function iterate(callback) {
  const talk = ["hi", "bye", "learn"];
  talk.forEach(callback);
  return talk;
}
