app.filter('tableFilter', function(orderByFilter){
  return function(collection, expression, reverse){
    if (typeof expression == 'string') {
      if ( expression == "Close") {
        var result = collection.sort(function(a, b){
          return Number(a.Close) - Number(b.Close);
        });
        return reverse ? result.reverse() : result;
      } else {
        return orderByFilter(collection, expression, reverse)
      }
    } else {
      var result = collection.sort(function(a, b){
        return expression(a) - expression(b);
      })
      return reverse ? result.reverse() : result;
    }
  }
})