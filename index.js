function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
};

function iterate(callback) {
  let someArray = [1,2,3];
  someArray.forEach(callback);
  return someArray;
};

function doToArray(array, callback) {
  array.forEach(callback);
};

// for iterate over an array
