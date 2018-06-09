function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}:${element}`);
  });
}

function iterate(callback) {
  var numbers = [6, 1, 0, 3];
  numbers.forEach(callback){
    return numbers;
  }
}