function iterativeLog(array) {
  array.forEach((element, index) => {  //Note to self: remember that () => is the same as function()!!!
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const woodwinds = ["clarinet", "oboe", "bassoon", "saxophone"]

  woodwinds.forEach(callback)

  return woodwinds
}

function doToArray(array, callback) {
  array.forEach(callback)
}
