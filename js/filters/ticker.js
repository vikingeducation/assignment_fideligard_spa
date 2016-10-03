app.filter('tickerFilter', [function(){

  return function(collection) {
    var values = []
    for (var key in collection) {
      values.push(collection[key]);
    }
    return values
  }
  
}])
  