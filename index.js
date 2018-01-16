var iterativeLog =(arr) =>{
  arr.forEach((el,i)=>{console.log(`${i}: ${el}`)})
}

var iterate =(callback)=>{
  var arr =[1,2,3];
  arr.forEach(callback);
  return arr;
}

var doToArray =(arr,callback) => {
  arr.forEach(callback);
}
