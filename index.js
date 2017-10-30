function iterativeLog(array) {
  array.forEach((a, i) => {
    console.log(`${i}: ${a}`);
  })
}

function iterate(callback) {
  const cars = ["Maazda","Delorean","Millenium Falcon"];

  cars.forEach(callback);

  return cars;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
