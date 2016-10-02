app.filter('filterObjectBy', ['_', function(_) {
  return function(obj, searchKey) {
    if (searchKey) {
      return _.pickBy(obj, function(transaction, id) {
        return _.some(transaction, function(k) {
          return !!k.toString().match(new RegExp(searchKey, 'i'));
        });
      });
    } else {
      return obj;
    }
  };
}]);
