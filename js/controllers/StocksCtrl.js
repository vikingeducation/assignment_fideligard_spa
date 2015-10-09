fideligard.controller('StocksCtrl',
  ['$scope', 'dateService', 'stockCalculator',
  function($scope, dateService, stockCalculator) {


    ($scope.setDate = function(newDate) {
      $scope.currentDate = newDate;
      $scope.stocks = [stockCalculator.getStocks($scope.currentDate)];
    })(dateService.currentDate);


    // service needs to be on $scope in order to be $watched
    $scope.date = dateService;
    $scope.$watch('date.currentDate', $scope.setDate );


  }]);