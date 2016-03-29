stocks.directive('stockDisplay', [ function() {
  console.log('stock display directive');

  function date_by_subtracting_days(date, days) {
    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + days,
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
        );
  }

  var stockDifference = function(values, daysAgo, currentDate) {
    return closeFor(values,0,currentDate) - closeFor(values,daysAgo, currentDate);
  };

  var closeFor = function(values, daysAgo, currentDate) {
    if (!daysAgo) {
      daysAgo = 0;
    }
    var value;
    var count = 0;
    while (!value && count > -10) {
      var date = date_by_subtracting_days(currentDate, count - daysAgo);
      var isoDate = date.toISOString().slice(0, 10);
      value = values[isoDate];
      count -= 1;
    }
    return value;
  };

  link = function(scope) {
    scope.$watch('currentDate', function() {
      scope.closer = closeFor(scope.values,0,scope.currentDate);
      scope.oneDay = stockDifference(scope.values,1,scope.currentDate);
      scope.sevenDays = stockDifference(scope.values,7,scope.currentDate);
      scope.thirtyDays = stockDifference(scope.values,30,scope.currentDate);
    });
  };

  var def = {
    restrict: 'AE',
    scope: {
      stock: '=',
      values: '=',
      currentDate: '=',
    },
    link: link,
    templateUrl: 'app/directives/stock_display.html',
  };

  return def;

}]);
