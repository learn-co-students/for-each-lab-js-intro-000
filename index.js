let cuteAnimals = ['cat', 'dog', 'kangaroo'];

function iterativeLog(array) {
  console.log("These are cute animals");
  array.forEach(function(element, index, array) {
    console.log(`${index+1}: ${element}`);
  });
};

iterativeLog(cuteAnimals);
