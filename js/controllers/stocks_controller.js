app.controller('StocksCtrl',
['date', 'stocks', '$scope', 'StockService', 'DateService',
function(date, stocks, $scope, StockService, DateService) {

  $scope.dateInfo = DateService.getDateInfo();
  $scope.stocks = stocks;

  console.log($scope.stocks);

  $scope.storeDate = function() {
    DateService.setDate($scope.selectedDate);
  };

  // $scope.$watch('date', function(){
  //   console.log("watch firing");
  //   $scope.date = $scope.selectedDate;
  // })

}]);
