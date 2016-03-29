fideligard.controller('StocksCtrl', ['$scope', 'StocksService', 'DatePickerService', function($scope, StocksService, DatePickerService) {


  $scope.stocks = [StocksService.singleStockOneYear()];

  $scope.dateString = DatePickerService.dateString;

  $scope.$watch(function() {
      return DatePickerService.dateString
    }, 
    function(newValue, oldValue) {
      $scope.dateString = newValue;
    })


}]);
