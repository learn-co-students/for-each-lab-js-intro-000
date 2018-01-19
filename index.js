var iterativeLog = (array) => {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

var iterate = (callback) => {
  var array = ["Aidan", "Lily", "Bea", "Jason"]
  array.forEach(callback)
  return array
}

var doToArray = (array, callback) => {
  array.forEach(callback)
}
