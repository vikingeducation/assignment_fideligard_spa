Fideligard.controller('TradeCtrl', ['$scope', 'stockService', 'dateService', 'transactionService', '$stateParams', '$state',
  function($scope, stockService, dateService, transactionService, $stateParams, $state ) {
    $scope.stocks = stockService.getAllStocks();
    $scope.date = dateService.getCurrent().toISO();
    $scope.params = {
      symbol   : $stateParams.symbol,
      date     : new Date($scope.date),
      quantity : 2,
      type     : 'buy'
    }
    var stock = _.find($scope.stocks, function(item){ return item.key === $stateParams.symbol + '%20'});
    $scope.params.price = stock[$scope.date].Close;

    $scope.trade = function(valid, form) {
      if (valid) {
        console.log($scope.params);
        transactionService.trade($scope.params);
        $state.go('root.transaction');
      }
    }
    $scope.cashAvailable = transactionService.getCashAvailable();

    $scope.maxQuantity = function() {
      if ($scope.params.type === 'buy') {
        return Math.floor($scope.cashAvailable / $scope.params.price);
      } else {
        return transactionService.getUserStocks()[$scope.params.symbol] ?
        transactionService.getUserStocks()[$scope.params.symbol].quantity : 0;
      }
    }
    $scope.onDateChange = function(new_date) {
      if (new_date === undefined) return;
      dateService.updateCurrent(new_date);
      $scope.date = new_date.toISO();;
      $scope.params.price = stock[$scope.date].Close;
    }

    $scope.seedTradeData = function() {
      stockService.seedTx();
    }
}]);
