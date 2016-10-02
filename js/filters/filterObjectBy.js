app.filter('filterObjectBy', ['_', function(_) {
  return function(obj, searchKey) {
    console.log(searchKey);
    if (searchKey) {
      return _.filter(obj, function(id,transaction) {
        return _.filter(transaction, function(k,v) {
          return v === searchKey;
        });
      });
    } else {
      return obj;
    }
  };
}]);
