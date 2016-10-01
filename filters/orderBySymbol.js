fideligardApp.filter("orderBySymbol", function() {
  return function(collection, boolean) {
    if (boolean) {
      var filteredCollection = [];
      for (var key in collection) {
        var item = collection[key];

      }
      return filteredCollection;
    } else {
      return collection
    }
  }
})