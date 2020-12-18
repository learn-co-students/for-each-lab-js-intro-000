function iterativeLog(arr) {
  idx = 0;
  arr.forEach(elem => {
    console.log(`${idx}: ${elem}`);
    idx++;
  })
}

function iterate(call) {
  arr = [" ", " ", " "];

  arr.forEach(call);

  return arr;
}

function doToArray(arr, call) {
  arr.forEach(call)
}
