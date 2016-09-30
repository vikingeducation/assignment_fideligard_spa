app.filter('filterObjectBy', ['_', function(_) {
  return function(items, value) {
    return _.filter(items,function(item) {
      var symbol = Object.keys(item)[0];
      return item[symbol]['Date'] === value;
    });
  };
}]);
