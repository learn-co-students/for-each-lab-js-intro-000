function iterativeLog(array, callback) {
  array.forEach(callback)
}

function callBack(array, index, element) {
  console.log(`${index}: ${element}`)
}

iterativeLog(array, callBack)
