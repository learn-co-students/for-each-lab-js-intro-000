function iterativeLog(array){
    array.forEach((element, index, array) => {
        console.log(`${index}: ${element}`)
    } )
}

function iterate(callback){
    let veggies = ["sunchoke","kohlrabi","rainbow carrot"]
    veggies.forEach(callback)
    return veggies
}
function doToArray (array, callback){
    array.forEach(callback)
}
