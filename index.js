function callback(element, index) {
    console.log(`${index}: ${element}`)
}

function iterate(callback) {
    var r = ['a','b']
    r.forEach(callback)
    console.log(`r after callback: ${r.length}`)
    return r
}

// Error: Expected 0 to be greater than or equal to 1

function iterativeLog(array) {
    array.forEach(callback)
}

function doToArray(array, callback) {
    array.forEach(callback)
}
