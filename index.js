function iterativeLog(array) {
  array.forEach( (element, index) => {
    console.log(`${index}:${element}`)
  });
}

function iterate(callback) {
  let arr = []
  arr.forEach( (ele, idx) => {
    callback();
  });
  
}

function doToArray(array, callback) {
  array.forEach( (ele, idx) => {
    callback(ele);
  } ); 
}