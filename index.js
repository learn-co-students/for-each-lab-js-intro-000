function iterativeLog(array) {
  array.forEach((element, index)=>{
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  array=[0,1,2,3,4,5];
  array.forEach((element)=>callback(element))
  return array;
}

function doToArray(array, callback){
  array.forEach((element)=>callback(element))
  return array;
}
