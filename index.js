function iterativeLog(array) {
    array.forEach((element, index) => {
        console.log(`${index}: ${element}`)
    })
}

function iterate(f) {
    var array=['JavaScript','APIs','Markup']
    array.forEach(f)
    return array
}

function doToArray(array, callback) {
    array.forEach(callback)
}
