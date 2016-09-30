app.controller('StocksDateCtrl',
['date', 'stocksObj', '$scope', 'StockService', 'DateService',
function(date, stocksObj, $scope, StockService, DateService) {

  // $scope.dateInfo = DateService.getDateInfo();
  $scope.dates = stocksObj.dates;
  $scope.maxDateRange = $scope.dates.length-1;
  $scope.selectedDateIndex = 0;
  $scope.dateInfo = date;

  $scope.$watch('selectedDateIndex', function() {
    DateService.setDate($scope.dates[$scope.selectedDateIndex]);
    $scope.dateInfo.currentDate = DateService.getDate().currentDate;
  });

}]);
