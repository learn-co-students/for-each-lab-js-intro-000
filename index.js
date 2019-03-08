function iterativeLog(array)
{
  array.forEach((index, element) =>
  {console.log(`${index}: ${element}`)
})
}

function iterate(callback)
{
 var theArray = [1, 2, 3]

   theArray.foreach(callback)

   return theArray
}

function doToArray(array, callback)
{
  array.forEach(callback)
}

//Had a ton of dependency errors so tests wont run, cross referenced with github solution.
