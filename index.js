var array = ["dog", "cat", "squirrel"];

function iterativeLog(arr) {
  arr.forEach((el, i) => {
    console.log(`${i}: ${el}`)
  })
}

//iterativeLog(array);

function iterate(callback) {
  var cats = ["Garfield", "Bianca", "Petunia"]

  cats.forEach(callback)

  return cats
}

function doToArray(arr, callback) {
  arr.forEach(callback);
}
 