tradeApp.controller('tradeCtrl',  ['$scope',
                                  'tradeYahooService','stockData',
                                  function( $scope,
                                            tradeYahooService, stockData){


$scope.stockData = stockData;
$scope.tradeSymbol = tradeYahooService.tradeSymbol;
$scope.stock = tradeYahooService.showStock();
}]);