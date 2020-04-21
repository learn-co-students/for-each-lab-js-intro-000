function iterativeLog(a) {
  a.foreach((i, e) => console.log(`${i}: ${e}`))
}

function iterate(a) {
  var array = [1, 2, 3]
  array.foreach(a)

  return array
}

function doToArray(a, c) {
  a.foreach(c)
}
