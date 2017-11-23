function iterativeLog(arr) {
  arr.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(func) {
  letters = ['a', 'b', 'c']
  letters.forEach(func)
  return letters
}

function doToArray(arr, func) {
  arr.forEach(func)
}
