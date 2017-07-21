function iterativeLog(array) {
  array.forEach((el, i) => {console.log(`${i}: ${el}`)});
}



function iterate(callback) {
  var arrayNew = [1,2,3];
  arrayNew.forEach(callback);
  return arrayNew;
}


function doToArray(array, callback) {
  array.forEach(callback);
}
