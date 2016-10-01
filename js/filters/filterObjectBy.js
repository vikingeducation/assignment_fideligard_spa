app.filter('filterObjectBy', ['_', function(_) {
  return function(items, value) {
    return _.filter(items,function(item) {
      console.log(value);
      var symbol = Object.keys(item)[0];
      return item[symbol]['Date'] === value;
    });
  };
}]);
