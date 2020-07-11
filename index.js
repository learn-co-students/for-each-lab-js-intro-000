var iterativeLog= array =>{
  array.forEach(callback);
  console.log(`${index}: ${array[index]}`)
}

var iterate= callback =>{
  var Yo=["Hi","Bye"]
  Yo.forEach(callback)
  return Yo;
}

var doToArray= (array,callback) =>{
  array.forEach(callback);
}
