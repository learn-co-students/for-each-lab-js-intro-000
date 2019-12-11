function iterativeLog(array) {
  array.forEach((elem, index) => console.log(`${index}: ${elem}`));
}

function iterate(callback) {
  const peanuts =['Charlie', 'Snoopy', 'Linus', 'Schroeder', 'Peppermint Pattie'];

  peanuts.forEach(callback);

  return peanuts;
}


function doToArray(arr, callback) {
  arr.forEach(callback);
}
