var array = ["1", "2", "3"];

function callback(element, index, array){
  console.log(`${index}: ${element}`);
}

function iterativeLog(array){
  array.forEach(callback);
}

function square(n) {
  console.log(n * n)
}

function iterate(square){
  var a = ["foo", "bar"];
  a.forEach(square);
  return a
}

function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}

function doToArray(array, changeCompletely){
  array.forEach(changeCompletely);
  console.log(array)
}
