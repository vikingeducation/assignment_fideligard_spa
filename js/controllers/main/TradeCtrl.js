fideligard.controller('TradeCtrl',
  ['$scope', 'dateService', 'bank', 'portfolio', 'stockManager',
  function($scope, dateService, bank, portfolio, stockManager) {

    $scope.bank = bank.availableCash;

    $scope.symbol = 'AAPL';

    $scope.currentShares = portfolio.currentShares($scope.symbol);

    $scope.quantity = 5;
    $scope.date = new Date(dateService.currentDate);
    $scope.price = stockManager.getPrice($scope.symbol, $scope.date);

    $scope.mgr = stockManager;
    $scope.$watch('mgr.stockData', function(newData) {
      $scope.price = stockManager.getPrice($scope.symbol, $scope.date);
    }, true)

}]);