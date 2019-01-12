function iterativeLog(array){
  array.forEach((element,index)=>{
    console.log(`${index}:${element}`);
  })
}

function iterate(callback){

  const fruits=["apple","orange","strawberry"];
  fruits.forEach(callback)
  return fruits;
}

function doToArray(array, callback){
  array.forEach(callback);
}
