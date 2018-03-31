var iterativeLog = function(arr) {
  arr.forEach((elem, indx) => console.log(`${indx}: ${elem}`));
};

var iterate = function(func) {
  var arr = [2, 3, 5, 7, 11, 13, 17, 19, 'love/hate', 'cats/dogs'];
  arr.forEach(func);
  return arr;
};

var doToArray = function(arr, func) {
  arr.forEach(func);
};
