function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
   })
  }

function iterate(callback) {
    var viruses = ["COVID", "flu", "cold"]
    viruses.forEach(callback)
    return viruses
  }

function doToArray(array, callback) {
  array.forEach(callback)
}
