function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var todoList = ['Renew License', 'Renew AAA.', 'Get smog check'];
  todoList.forEach(callback);
  return todoList;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
