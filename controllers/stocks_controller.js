fideligard.controller('StocksCtrl', ['$scope', 'StocksService', 'DatePickerService', function($scope, StocksService, DatePickerService) {

  $scope.stocks = StocksService.constructStocks();


  $scope.date = String(DatePickerService.date);


  $scope.$watch(function() {
      return DatePickerService.date;
    },
    function(newValue) {
      $scope.date = newValue;
      console.log("stocks controller date was changed to: "+ $scope.date)
    });


  $scope.filterByName = "";
  $scope.sortType = ""
  $scope.sortReverse = false;


}]);