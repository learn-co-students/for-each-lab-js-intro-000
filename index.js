function iterativeLog (array) {

  function logArrayElements(element, index, array) {
    console.log(`${index}: ${element}`)
  }

  array.forEach(logArrayElements);

}

function iterate (cb) {

  let arr = [1,2,4,8,16,32];

  arr.forEach(el => cb(el));

  return arr;

}

function doToArray (arr, cb) {

  arr.forEach(el => cb(el));

  return arr;
}
