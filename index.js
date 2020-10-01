function iterativeLog(a) {
  a.forEach((e, i) => console.log(`${i}: ${e}`))
}

function iterate(callback) {
  let a = ['wtf']
  a.forEach(callback)
  return a
}

function doToArray(a, callback) {
  a.forEach(callback)
}
