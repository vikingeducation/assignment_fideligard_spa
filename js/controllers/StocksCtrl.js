fideligard.controller('StocksCtrl',
  ['$scope', 'dateService', 'stockAPI', 'stockCalculator',
  function($scope, dateService, stockAPI, stockCalculator) {


    ($scope.setDate = function(newDate) {
      $scope.currentDate = newDate;
      $scope.stocks = [stockCalculator.getStocks($scope.currentDate)];
    })(dateService.currentDate);


    // service needs to be on $scope in order to be $watched
    $scope.date = dateService;
    $scope.$watch('date.currentDate', $scope.setDate );

    stockAPI.getStock('AAPL', '2013-11-21', '2014-12-31');
  }]);