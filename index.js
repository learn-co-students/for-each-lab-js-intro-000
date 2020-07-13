function iterativeLog(){
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  const array = [1, 2, 3, 4];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}















