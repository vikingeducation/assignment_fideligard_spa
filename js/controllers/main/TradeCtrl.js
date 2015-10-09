fideligard.controller('TradeCtrl',
  ['$scope', 'dateService',
  function($scope, dateService) {

    $scope.symbol = 'AAPL';
    $scope.quantity = 5;
    $scope.date = new Date(dateService.currentDate);
    $scope.price = 45;

}]);