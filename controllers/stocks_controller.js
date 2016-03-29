fideligard.controller('StocksCtrl', ['$scope', 'StocksService', 'DatePickerService', function($scope, StocksService, DatePickerService) {


  $scope.stocks = [StocksService.singleStockOneYear()];
  console.log($scope.stocks);

  $scope.date = DatePickerService.date;

  $scope.$watch(function() {
      return DatePickerService.date;
    },
    function(newValue, oldValue) {
      $scope.date = newValue;
    });


}]);
