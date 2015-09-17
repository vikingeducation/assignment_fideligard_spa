tradeApp.controller('tradeCtrl',  [ '$scope',
                                    'tradeYahooService',
                                    'stockData',
                                  function( $scope,
                                            tradeYahooService, stockData){


//$scope.stockData = stockData;
$scope.tradeSymbol = tradeYahooService.tradeSymbol;

// $scope.stocks = tradeYahooService.showStock();
// $scope.stocks = stockData;
$scope.stocks = tradeYahooService.getStockData();
console.log("in tradeCtrl", $scope.stocks);
}]);