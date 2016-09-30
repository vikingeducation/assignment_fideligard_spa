app.filter('filterObjectBy', ['_', function(_) {
  return function(items, value, symbol) {
    return _.filter(items,function(item) {
      return item[symbol]['Date'] === value;
    });
  };
}]);
