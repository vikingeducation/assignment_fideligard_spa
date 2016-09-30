app.filter('filterByTicker', ['_', function(_) {
  return function(items, ticker, boolean) {
    if (boolean) {
      return _.filter(items, function(item) {
        return item['Symbol'] === ticker;
      });
    } else {
      return items;
    }
  };
}]);
