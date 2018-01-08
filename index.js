function iterativeLog(anyArray) {
    anyArray.forEach((element, index, array) => {
        console.log(`${index}: ${element}`);
    })
}

function iterate(callback) {
    var tech = ["laptop", "smartphone", "ebooks"]
    tech.forEach(callback)

    return tech;
}

function doToArray(array, callback) {
    array.forEach(callback);
}
