function iterativeLog() {
  array.foreach((element, index) => {
    console.log (`${index} : ${element}`)
  })
}

function iterate() {
  const luckyNumbers = [3, 5, 7, 13]
  luckyNumbers.forEach(callback)
  return luckyNumbers
}

function doToArray(array, callback){
  array.forEach(callback)
}