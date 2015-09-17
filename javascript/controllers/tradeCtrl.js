tradeApp.controller('tradeCtrl',  ['$scope',
                                  'tradeYahooService',
                                  function( $scope,
                                            tradeYahooService){


//$scope.stockData = stockData;
$scope.tradeSymbol = tradeYahooService.tradeSymbol;

$scope.stocks = tradeYahooService.showStock();
console.log("in tradeCtrl", $scope.stock);
}]);