function iterativeLog(array){
    debugger
    array.forEach((element,index) => {
        console.log(`${index}: ${element}`);
      }
    )
}

function iterate(callback){
    array = [1,2,3]
    array.forEach(callback)
    return array
}

function doToArray(array, callback){
    debugger
    array.forEach(callback)
}
