fideligard.controller('StocksCtrl', ['$scope', 'StocksService', 'DatePickerService', function($scope, StocksService, DatePickerService) {


  $scope.stocks = StocksService.getStocks();

  $scope.date = DatePickerService.date;

  $scope.$watch(function() {
      return DatePickerService.date;
    },
    function(newValue) {
      $scope.date = newValue;
      console.log("stocks controller date was changed to:"+ $scope.date)
    });


}]);
