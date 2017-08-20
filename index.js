/*function logElements(element, index){
  console.log(`{${[index]}: ${element}}`);
}

function iterativeLog(array) {
  array.forEach((element, index, array) => logElements(element, index));
}
*/
function iterativeLog(array) {
  array.forEach((element, index) => console.log(`{${[index]}: ${element}}`));
}



function iterativeLog(array) {
  array.forEach((element, index, array) => console.log(`${[index]}: ${element}`));
}

function iterate(callback) {
  var array = ["hello!"];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
