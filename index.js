function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var swingShift = ['Bonnie','Havea','James','Jared','Melanie'];
  swingShift.forEach(callback);
  return swingShift
}

function doToArray(array, callback) {
  array.forEach(callback)
}

//this is a comment
