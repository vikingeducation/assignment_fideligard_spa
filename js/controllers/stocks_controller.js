app.controller('StocksCtrl',
['date', 'stocksObj', '$scope', 'StockService', 'DateService',
function(date, stocksObj, $scope, StockService, DateService) {

  // $scope.dateInfo = DateService.getDateInfo();
  $scope.stocks = stocksObj.stockData;
  $scope.dates = stocksObj.dates;
  $scope.maxDateRange = $scope.dates.length;
  $scope.selectedDateIndex = 0;
  $scope.selectedSymbol = 'AAPL';

  $scope.storeDate = function() {
    DateService.setDate($scope.selectedDateIndex);
  };

  $scope.$watch('selectedDateIndex', function(){
    console.log($scope.selectedDateIndex);
    DateService.setDate($scope.dates[$scope.selectedDateIndex]);
    $scope.dateInfo = DateService.getDateInfo();
  });

}]);
