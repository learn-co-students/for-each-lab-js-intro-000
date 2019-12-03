function iterativeLog(array) {
    array.forEach((element, index) => console.log(`${index}: ${element}`))
}

function iterate(callback) {
    const pinks = ['rosy', 'pastel', 'fuchsia', 'neon']

    pinks.forEach(callback)

    return pinks

}

function doToArray(array, callback) {
    array.forEach(callback)
}