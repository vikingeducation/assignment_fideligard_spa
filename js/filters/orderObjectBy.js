app.filter('orderObjectBy', ['_', function(_) {
  return function(items, field, reverse) {
    // console.log(field);
    var sorted = _.sortBy(items, field);
    if (reverse) { filtered.reverse(); }
    return sorted;
  };
}]);
