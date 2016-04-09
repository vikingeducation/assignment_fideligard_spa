simulator.controller('TradeCtrl', ['$scope', '$stateParams', 'portfolioDates', 'stockPrices', 'portfolioLedger',
  function($scope, $stateParams, portfolioDates, stockPrices, portfolioLedger){

  $scope.paramz = $stateParams;

  $scope.ledger = portfolioLedger;

  $scope.cashOnHand = $scope.ledger.cashOnHand($stateParams.date);

  $scope.symbols = stockPrices.getSymbols();

  $scope.formData = {
    symbol: $stateParams.symbol,
    date: $stateParams.date,
  };

  $scope.buySellArr = ['Buy', 'Sell'];

  $scope.minDate = portfolioDates.start;
  $scope.maxDate = portfolioDates.end;
  $scope.tradeDate = $stateParams.date;

  $scope.$watchGroup(['formData.symbol', 'formData.date'], function(newVals){
    if (newVals[0] && newVals[1]) {
      $scope.formData.price = stockPrices.closingPrice(newVals[0], newVals[1]);
    }
  });

  // validations

  $scope.currentBalance = function(newQuantity){
    if ($scope.formData.buySell == 'Buy') {
      return $scope.ledger.cashOnHand($scope.formData.date) >= 
             $scope.formData.price * Number(newQuantity);
    } else {
      return true;
    }
  };

  $scope.futureBalance = function(newQuantity){
    if ($scope.formData.buySell == 'Buy' && $scope.currentBalance(newQuantity)) {
      return $scope.ledger.cashOnHand() >= 
             $scope.formData.price * Number(newQuantity);
    } else {
      return true;
    }
  };

  $scope.currentQuantity = function(newQuantity){
    if ($scope.formData.buySell == 'Sell') {
      return $scope.ledger.quantityOnHand($scope.formData.symbol, $scope.formData.date) >= 
             Number(newQuantity);
    } else {
      return true;
    }
  };

  $scope.futureQuantity = function(newQuantity){
    if ($scope.formData.buySell == 'Sell' && $scope.currentQuantity(newQuantity)) {
      return $scope.ledger.quantityOnHand($scope.formData.symbol) >= 
             Number(newQuantity);
    } else {
      return true;
    }
  };

}]);