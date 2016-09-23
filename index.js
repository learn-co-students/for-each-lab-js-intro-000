var iterativeLog = (arr) =>{
  arr.forEach((el, index) =>{
    console.log(`${index}: ${el}`);
  })
}

var iterate = (callback) =>{
  let arr = ["a", "b", "c"]

  arr.forEach(callback)
  return arr;
}

var doToArray = (array, callback) =>{
  return array.forEach(callback);
}
