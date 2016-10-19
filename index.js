function iterativeLog(x){
for (var i=0 ;i < x.length ; i++){
x.forEach(y => { console.log(`${i}: ${x[i]}`) })

}
}
function iterate(callback) {
var array = [1,2,3]

  array.forEach(callback)

    return array
}

function doToArray(array,callback){

  array.forEach(callback)

}
