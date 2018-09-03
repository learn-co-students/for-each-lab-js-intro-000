function iterativeLog() {
  array.foreach((element, index) => {
    console.log (`${index} : ${element}`)
  })
}


function doToArray(array, callback){
  array.forEach(callback)
}