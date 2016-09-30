app.controller('StocksCtrl',
['date', 'stocks', '$scope', 'StockService', 'DateService',
function(date, stocks, $scope, StockService, DateService) {

  // console.log(date);
  $scope.dateInfo = DateService.getDateInfo();
  $scope.stocks = stocks;

  $scope.storeDate = function() {
    DateService.setDate($scope.selectedDate);
  };

  // $scope.$watch('date', function(){
  //   console.log("watch firing");
  //   $scope.date = $scope.selectedDate;
  // })

}]);
