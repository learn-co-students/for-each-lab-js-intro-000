function iterativeLog(arr) {
  arr.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}
function iterate(callback) {
  let hero = ['john', 'sean', 'pitt'];
  hero.forEach(callback);
  return hero;
}
function doToArray(arr, callback) {
  arr.forEach(callback);
}