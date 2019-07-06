var iterativeLog = (array) => {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  })
}

var iterate = (callback) => {
  var arrayExample = ["hello", 1, "23", 45, "yeah!"]

  arrayExample.forEach(callback)

  return arrayExample
}

var doToArray = (array, callback) => {
  array.forEach(callback)
}
