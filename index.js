
function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);});
}


function iterate(callback) {
  var internalArray = ["BMW", "Toyota", "Kia"];
    internalArray.forEach(callback);
    return internalArray
}
function doToArray(array, callback) {
  array.forEach(callback);
}
