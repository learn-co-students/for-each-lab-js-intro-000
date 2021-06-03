function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const lotteryNumbers = ['a', 'b', 'c', 'd ']
  lotteryNumbers.forEach(callback)
  return lotteryNumbers
}

function doToArray(array, callback) {
  array.forEach(callback)
} 
