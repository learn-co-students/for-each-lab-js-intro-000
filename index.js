function iterativeLog(array) {
  array.foreach((element, index) =>
    console.log(`${index}: ${element}`));
}
function iterate(callback) {
  let array = [1,2,3,4];
  array.forEach(callback);
  return array;
}
function doToArray(array,callback) {
  array.forEach(callback);
}
