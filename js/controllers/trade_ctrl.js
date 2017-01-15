Fideligard.controller('TradeCtrl', ['$scope', 'stockService', 'dateService', '$stateParams',
  function($scope, stockService, dateService, $stateParams) {
    $scope.stocks = stockService.getAllStocks();
    $scope.date = dateService.getCurrent().toISO();
    $scope.params = {
      symbol   : $stateParams.symbol,
      date     : new Date($scope.date),
      quantity : 100,
      buysell  : 'buy'
    }
    var stock = _.find($scope.stocks, function(item){ return item.key === $stateParams.symbol + '%20'});
    $scope.params.price = stock[$scope.date].Close;

    $scope.trade = function(valid, form) {
      if (valid) {
        console.log($scope.params);
        // transactionService.trade($scope.params);
      }
    }

    $scope.onDateChange = function(new_date) {
      if (new_date === undefined) return;
      dateService.updateCurrent(new_date);
      $scope.date = new_date.toISO();;
      $scope.params.price = stock[$scope.date].Close;
    }
}]);
