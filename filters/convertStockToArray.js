fideligardApp.filter("convertStockToArray", function() {
  return function(collection) {
    var array = []
    for (var key in collection) {
      array.push(collection[key])
    }
    return array
  }
})