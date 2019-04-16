function iterativeLog(array){
  array.forEach(function(index,element) {
           console.log(`${element}: ${index}`)
})

}
function doToArray(array, callback){
return  array.forEach(callback)
}

function iterate(callback){
var arr = [1,2,3]
arr.forEach(callback)
return arr
}
