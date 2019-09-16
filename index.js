function iterativeLog(array) {
  array.forEach((elem, index, array) => {
    console.log(`${index}: ${elem}`);
  });
}
function iterate(callback) {
  const langs = ["c#", "c++", "js", "X++"];
  langs.forEach(callback);
  return langs;
}
function doToArray(array, callback) {
  array.forEach(callback);
}
