function iterativeLog(array) {
  array.forEach((el,index, array) => {
    console.log(`${index}: ${el}`)
  });
}

function iterate(callback) {
  let arr = ["a","b","c","d","e","f"];
  arr.forEach(callback);
  return arr;
}

function doToArray(array,callback) {
  array.forEach(callback);
}

