
//it's a bingo!
function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

//littyyy 5000
function iterate(callback) {
  var coldCuts = ['ham', 'turkey', 'bologna'];
  coldCuts.forEach(callback);
  return coldCuts;
}

//let's boogie
function doToArray(array, callback) {
  array.forEach(callback)
}