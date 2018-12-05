function iterativeLog (array) {
  array.forEach(callback)
}

function iterate (callback) {
  var animals = ["dog","cat","camel"];
  animals.forEach(callback);
  return animals;
}

function doToArray (array , callback) {
  array.forEach(callback);
}

mocha.run()

