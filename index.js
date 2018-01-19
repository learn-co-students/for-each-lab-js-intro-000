function iterativeLog(array) {
  array.forEach((x, i) => {
    console.log(`${i}: ${x}`)
  })
}

function iterate(callback) {
  let cats = ['lion', 'panther', 'tiger']
  cats.forEach(callback)
  return cats
}

function doToArray(array, callback) {
  array.forEach(callback)
}