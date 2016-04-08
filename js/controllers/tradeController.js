simulator.controller('TradeCtrl', ['$scope', '$stateParams', 'portfolioDates', 'stockPrices',
  function($scope, $stateParams, portfolioDates, stockPrices){

  $scope.paramz = $stateParams;

  $scope.symbols = stockPrices.getSymbols();

  $scope.buySellArr = ["Buy", "Sell"];

  $scope.minDate = portfolioDates.start;
  $scope.maxDate = portfolioDates.end;
  $scope.tradeDate = $stateParams.date;

}]);