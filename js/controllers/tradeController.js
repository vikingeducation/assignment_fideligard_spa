simulator.controller('TradeCtrl', ['$scope', '$stateParams', '$state', 'portfolioDates', 'stockPrices', 'portfolioLedger',
  function($scope, $stateParams, $state, portfolioDates, stockPrices, portfolioLedger){

  $scope.ledger = portfolioLedger;
  $scope.symbols = stockPrices.getSymbols();
  $scope.buySellArr = ['Buy', 'Sell'];
  $scope.minDate = portfolioDates.start;
  $scope.maxDate = portfolioDates.end;
  $scope.tradeDate = $stateParams.date;
  
  $scope.formData = {
    symbol: $stateParams.symbol,
    buySell: undefined,
    quantity: undefined,
    date: $stateParams.date,
  };

  $scope.$watch('formData.quantity', function(newVal){
    if (newVal) {
      $scope.displayTotal = $scope.formData.price * Number(newVal);
    } 
  });

  $scope.$watch('formData.date', function(newVal){
    $scope.cashOnHand = $scope.ledger.cashOnHand(newVal);
  });

  $scope.$watchGroup(['formData.symbol', 'formData.date'], function(newVals){
    if (newVals[0] && newVals[1]) {
      $scope.formData.price = stockPrices.closingPrice(newVals[0], newVals[1]);
    }
  });

  $scope.placeOrder = function(){
    $scope.ledger.addTransaction({
      date: new Date($scope.formData.date),
      symbol: $scope.formData.symbol,
      type: $scope.formData.buySell,
      quantity: Number($scope.formData.quantity),
      price: Number($scope.formData.price)
    }).then(function(response){
      $state.go('Transactions', {newIdx: response - 1});
    });
  };

}]);