function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const gospel = ["Matthew", "Mark", "Luke", "John"];

  gospel.forEach(callback);
  return gospel;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
