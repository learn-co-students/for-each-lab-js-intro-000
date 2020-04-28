function iterativeLog(array)
{
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback)
{
  var arr = [`Kitty Girl`, `Luna`]
  arr.forEach(element => callback(element))
  return arr
}

function doToArray(array, callback)
{
  array.forEach(element => callback(element))
}
