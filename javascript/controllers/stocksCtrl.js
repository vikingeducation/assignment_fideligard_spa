tradeApp.controller('stocksCtrl',  [  '$scope',
                                      'stockDataService',
                                      function( $scope,
                                                stockDataService
                                              ){

// allStocks = stockDataService.getAllStockData();
// stock = stockDataService.getStocksTableData();
$scope.stocks = stockDataService.getStocksTableData();

$scope.symbols = stockDataService.getSymbols();

$scope.symbolReturn = function(symbolFilter){
  var i = $scope.symbols.indexOf(symbolFilter);
  return $scope.symbols[i];
};

}]);