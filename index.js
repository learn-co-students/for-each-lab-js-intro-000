function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`)
  });
};

function iterate(callback) {
  var cheeses = ["mozzarella", "havarti", "cheddar", "swiss", "provolone"];
  cheeses.forEach(callback)
    return cheeses;
};
