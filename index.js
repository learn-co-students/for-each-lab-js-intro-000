function cbArrayEach(elm, index) {
  console.log(`${index}: ${elm}`);
}

function iterativeLog(arr) {
  arr.forEach(cbArrayEach);
}

function iterate(funcCallback) {
  var arr = [1, 2, 3];
  if (typeof funcCallback === 'function') {
    arr.forEach(funcCallback);
  }
  return arr;
}

function doToArray(arr, funcCallback) {
  if (typeof funcCallback === 'function') {
    arr.forEach(funcCallback);
  }
}