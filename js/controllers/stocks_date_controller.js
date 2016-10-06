app.controller('StocksDateCtrl',
['date', 'stocksObj', '$scope', 'StockService', 'DateService',
function(date, stocksObj, $scope, StockService, DateService) {

  // $scope.dateInfo = DateService.getDateInfo();
  $scope.dates = stocksObj.dates;
  $scope.maxDateRange = $scope.dates.length-1;
  $scope.selectedDateIndex = 0;
  // date is an object that has a currrentDate prop. Store that obj to
  // couple dateInfo to that obj.
  $scope.dateInfo = date;

  $scope.$watch('selectedDateIndex', function() {
    DateService.setDate($scope.dates[$scope.selectedDateIndex]);
    $scope.dateInfo.currentDate = DateService.getDateInfo().currentDate;
  });

}]);
