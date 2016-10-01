fideligardApp.filter("filterBySymbol", function() {
  return function(collection, symbol) {
    if (symbol) {
      var filteredCollection = {};
      for (var key in collection) {
        if (key.indexOf(symbol) > -1) {
          filteredCollection[key] = collection[key]
        }
      }
      return filteredCollection
    } else {
      return collection
    }
  }
})