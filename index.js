function iterativeLog(array) {
  array.forEach(element => {console.log(`${array.indexOf(element)}: ${element}`)});
}



function iterate(callback) {
  var arrayNew = [1,2,3];
  arrayNew.forEach(callback);
  return arrayNew;
}


function doToArray(array, callback) {
  array.forEach(callback);
}
