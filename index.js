
//Call .forEach() on this array,
//and inside the callback, log each element
//with the format ${index}: ${element}.


//function maybe(element, index, array)
  //array.forEach(array) {
    //console.log(`${index}: ${element}`)
//}

function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  });

}



//
function iterate(callback) {
  var test = [1, 2, 3]
  test.forEach(callback);
  return test;
}

//
function doToArray(array, callback) {
  array.forEach(callback);

}
