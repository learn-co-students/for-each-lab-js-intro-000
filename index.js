//first function
function iterativeLog(array) {
  array.forEach(function log(element, index, array) {
    console.log(`${index}: ${element}`)
  }
)
}
//second function
function iterate(callback) {
  var warcraftRaces = ['orcs'];
  warcraftRaces.forEach(callback)
  return warcraftRaces
}
//third function
function doToArray(array, callback) {
  array.forEach(callback)
}
