app.filter('orderObjectBy', ['_', function(_) {
  return function(obj, sortType, reverse) {
    if (sortType) {
      var sorted = _.sortBy(obj,sortType);
      if (reverse) { sorted.reverse(); }
      return sorted;
    } else {
      return obj;
    }
  };
}]);
