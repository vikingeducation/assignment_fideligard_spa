Fideligard.filter('tickerFilter', function() {

  return function(collection, tickerOption) {

    if (!tickerOption) {
      return collection;
    }

    var filteredCollection = {}

    angular.forEach(collection, function(quote) {
      var symbol = quote.Symbol.toLowerCase();
      var ticoption = tickerOption.toLowerCase();
      if (symbol.indexOf(ticoption) !== -1) {
        filteredCollection[quote.Symbol] = quote;
      }
    })
    return filteredCollection;
  };
});