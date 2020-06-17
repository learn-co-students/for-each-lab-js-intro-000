function iterativeLog(array) {
  array.forEach((element, index) => {
    consol.elog(`${index}: ${element}`);
  });
}

function iterate(callback) {
  let odds = [1, 3, 5, 7];
  odds.forEach((element, index) => {
    return odds;
  })
}

function doToArrat(array, callback) {
  array.forEach(callback);
}
