function iterativeLog(array){
  array.forEach((element, index) =>{
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  const dogs =["Pupper","Dogo","Woofer"]
  dogs.forEach(callback)
  return dogs
}

function doToArray(array, callback){
  array.forEach(callback)
}
