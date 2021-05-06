const iterativeLog = arr => arr.forEach((e, i) => console.log(`${i}: ${e}`));

const iterate = callback => {
  let arr = [1,2,3];
  arr.forEach(callback);
  return arr;
}

const doToArray = (arr, callback) => arr.forEach(callback);
