function iterativeLog(array) {
  array.forEach((el,i) => {
    console.log(`${i}: ${el}`);
})
}

function iterate(callback) {
  const blue = ["yellow", "red", "green"];
  blue.forEach(callback)
  return blue;
}

function doToArray(array, callback) {
  array.forEach(callback)
}
