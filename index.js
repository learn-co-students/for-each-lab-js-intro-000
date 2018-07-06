function iterativeLog(array) {
    array.forEach((element, index) => {
        console.log(`${index}: ${element}`);
    });
}


function iterate(func) {
    var array = [2, 2, 3];
    array.forEach(item => func(item));
}
