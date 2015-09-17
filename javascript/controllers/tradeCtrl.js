tradeApp.controller('tradeCtrl',  ['$scope',
                                  'tradeYahooService',
                                  function( $scope,
                                            tradeYahooService){


//$scope.stockData = stockData;
$scope.tradeSymbol = tradeYahooService.tradeSymbol;

$scope.stocks = tradeYahooService.showStock();
$scope.real = tradeYahooService.getStockData();
console.log("in tradeCtrl", $scope.real);
}]);