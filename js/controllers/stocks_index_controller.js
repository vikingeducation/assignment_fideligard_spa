app.controller('StocksIndexCtrl',
['date', 'stocksObj', '$scope', 'StockService', 'DateService',
function(date, stocksObj, $scope, StockService, DateService) {
  $scope.stockData = stocksObj.stockData;
  $scope.dates = stocksObj.dates;
  $scope.maxDateRange = $scope.dates.length-1;
  $scope.dateInfo = date;
}]);
