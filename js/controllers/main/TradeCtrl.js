fideligard.controller('TradeCtrl',
  ['$scope', 'dateService', 'bank', 'portfolio', 'stockManager',
  function($scope, dateService, bank, portfolio, stockManager) {

    $scope.bank = bank.availableCash;


    var selectOptions = {
      available: [
                { id: '1', name: 'Buy' },
                { id: '-1', name: 'Sell' }
      ],
      selected: { id: '1', name: 'Buy' }
    };


    $scope.transaction = {
      symbol: 'AAPL',
      transactOptions: selectOptions,
      quantity: 1,
      date: new Date(dateService.currentDate),
      price: null
    };


    $scope.currentShares = portfolio.currentShares($scope.transaction.symbol);


    $scope.status = function(valid) {
      if(valid) {
        return "VALID"
      } else {
        return "INVALID"
      };
    }


    $scope.refresh = function() {
      $scope.transaction.price = stockManager.getPrice($scope.transaction.symbol, $scope.transaction.date);
    }


    $scope.mgr = stockManager;
    $scope.$watch('mgr.stockData', function(newData) {
      $scope.transaction.price = stockManager.getPrice($scope.transaction.symbol, $scope.transaction.date);
    }, true)

}]);