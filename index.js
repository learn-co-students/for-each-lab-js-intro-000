function iterativeLog(array) {
    array.forEach((element, index, array) => {
        console.log(`${index}: ${element}`)
    });
}

function iterate(callback) {
    nums = [1,2,3,4,5];
    var squares = [];
    squares.push(nums.forEach(callback));
    return squares;
}

function doToArray(array, callback) {
    array.forEach(callback)
}

function square(n) {
  console.log(n * n)
}

iterate(square)
