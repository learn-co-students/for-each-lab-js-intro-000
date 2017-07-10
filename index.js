function iterativeLog(array)  {
  array.forEach((el, i) =>  {
    console.log(`${i}: ${el}`)
  })
}

function iterate(callback)  {
  const cats = ['Garfield', 'Princess', 'Bianca']

  cats.forEach(callback);

  return cats
}

function doToArray(array, callback)  {
  array.forEach(callback);
}
