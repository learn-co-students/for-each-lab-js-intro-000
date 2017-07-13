function iterativeLog(arr)
{
  arr.forEach((element,index,arr) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback)
{
  var arr=[1,2,3,4,5];
  arr.forEach(callback);
  return arr;
}

function doToArray(arr,cb)
{
  arr.forEach(cb);
}
