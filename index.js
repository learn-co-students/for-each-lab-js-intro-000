var numbers = [1,2,3,4,5,6,7,8,9,10];

function iterativeLog(array) {
  array.forEach(function (element, index) {
    console.log(`${index}: ${element}`);
  });
}

// iterativeLog(numbers);

// function name (element, index) {
//   console.log(`${index}: ${element}`);
// }

function iterate(callback) {
  var bubbleArray = ["blue", "green", "red"];
  bubbleArray.forEach(callback);
  return bubbleArray;
}

// iterate(name);

function doToArray(array, callback) {
  array.forEach(callback);
  return array;
}
// 
// doToArray(numbers, name);
