function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  const z = ["g", "b"];
  z.forEach(callback);
  return z;
}

function doToArray(array, callback) {
  array.forEach(callback)
}
