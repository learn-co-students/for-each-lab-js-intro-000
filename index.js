function iterativeLog(arr){
  arr.forEach((element, index, temp) => {console.log(`${index}: ${element}`)})
}//end itterativeLog


function iterate(callback){
  var temp = [1,2]

  temp.forEach((temp)=> {callback()});
  return temp;
}//end iterate


function doToArray(arr, callback){

  arr.forEach(() => {callback()})
}//end doToArray
