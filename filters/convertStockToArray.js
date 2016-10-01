fideligardApp.filter("convertStockToArray", function() {
  return function(collection) {
    var array = []
    console.log("collection = ");
    console.log(collection);
    for (var key in collection) {
      array.push(collection[key])
    }
    console.log(array);
    return array
  }
})