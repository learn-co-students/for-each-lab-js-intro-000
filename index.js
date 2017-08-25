function iterativeLog(array){
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  const monsters = ["werewolves", "vampires", "ghosts", "beholder"]
monsters.forEach(callback)
return monsters
}

function doToArray(array, callback){
  array.forEach(callback)
}
