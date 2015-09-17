tradeApp.controller('tradeCtrl', ['$scope',
                                  'tradeYahooService',
                                  function( $scope,
                                            tradeYahooService){

tradeYahooService.getStock();
$scope.allStocks = tradeYahooService.showStocks;

}]);