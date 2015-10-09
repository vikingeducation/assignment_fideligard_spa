fideligard.controller('StocksCtrl',
  ['$scope', 'dateService', 'stockManager', 'stockAPI', 'stockCalculator',
  function($scope, dateService, stockManager, stockAPI, stockCalculator) {


    ($scope.setDate = function(newDate) {
      $scope.currentDate = newDate;
      $scope.stocks = [stockCalculator.getStocks($scope.currentDate)];
    })(dateService.currentDate);


    // service needs to be on $scope in order to be $watched
    $scope.date = dateService;
    $scope.$watch('date.currentDate', $scope.setDate );

    stockManager.getStocks('2013-11-21', '2014-12-31');
  }]);