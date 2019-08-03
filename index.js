function iterativeLog(array)
{
  array.forEach(callback(element)
{
  console.log(`${index}: ${element}`);
});
}

function iterate(callback)
{
  var array=[];
  for(let i=0;i<10;i++)
  {
    array.push(`${i}`);
  }
  array.forEach(callback);
return array;
}

function doToArray(array,callback)
{
  array.forEach(callback);
  return array;
}
