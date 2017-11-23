function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const dog = ["jeter", "peter", "cat"]
  dog.forEach(callback);
  return dog

}

function doToArray(array, callback) {
  array.forEach(callback);
}
