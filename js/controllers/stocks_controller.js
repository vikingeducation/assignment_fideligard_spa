app.controller('StocksCtrl', ['date', '$scope', 'StockService', function(date, $scope, StockService) {

  StockService.all();

  $scope.date = date;

  $scope.getMin = function(){
    console.log("Get min is called");
    return Date.parse('2015/01/01')/1000
  }

  $scope.getMax = function(){
    return Date.parse('2015/12/31')/1000
  }

}]);
