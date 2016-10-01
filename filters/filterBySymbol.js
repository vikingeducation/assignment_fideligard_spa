fideligardApp.filter("filterBySymbol", function() {
  return function(collection, symbol) {
    if (symbol) {
      console.log(collection)

      var filteredCollection = {};
      for (var key in collection) {
        console.log("key")
        console.log(key)

        console.log("collection[key]")
        console.log(collection[key])
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