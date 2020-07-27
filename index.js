function iterativeLog(array){
  array.forEach(item, index => {
    console.log(`${index}: ${item}`)
  })
};

function iterate(callback){
  let bassArray = ["pink bass", "white bass"]

  bassArray.forEach(callback)
  
  return bassArray

}

function doToArray(array, callback){
  array.forEach(callback)
};