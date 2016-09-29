app.controller('StocksCtrl', ['date', '$scope', 'StockService', function(date, $scope, StockService) {

  StockService.all();

  // console.log(date);
  $scope.date = date;

}]);
