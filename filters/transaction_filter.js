Fideligard.filter('transactionFilter', function(){

  return function(collection, textFilter) {
    if (!textFilter) {return collection;}

    var filteredCollection = [];
    var text = String(textFilter).toLowerCase();

    angular.forEach(collection, function(transaction){
      var date = String(transaction.date);
      var sym = transaction.symbol.toLowerCase();
      if (date.indexOf(text) !== -1 || sym.indexOf(text) !== -1) {
        filteredCollection.push(transaction);
      }
    })
    return filteredCollection;
  }
});