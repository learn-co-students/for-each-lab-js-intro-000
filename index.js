function iterativeLog(array) {
  array.forEach((element, index, array) => {
  console.log(`${index}: ${element}`)
})
};

function iterate (callback) {
  var list = ["john", "tim", "frank"];
  list.forEach(callback);
  return list;
};

function doToArray (array, callback) {
  array.forEach(callback);
};
