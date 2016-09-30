app.filter('filterBySymbol', ['_', function (_) {

  return function(collection, symbol) {
    return _.filter(collection, function(el) {
      // -1 if nothing, +0 if true
      console.log("collection: ",collection);
      
      return (el.symbol.indexOf(symbol) >= 0);
    });

  
  };  
}]);