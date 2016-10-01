app.controller('StocksTradeCtrl',
['$scope', 'StockService', 'TradeService',
function($scope, StockService, TradeService) {

  $scope.trade = StockService.getSelectedStock();
  $scope.placeOrder = function() {
    TradeService.placeOrder($scope.trade);
  };

  $scope.formattedDate = function() {
    return $scope.trade.stock.Date ? $scope.trade.stock.Date : '2015-01-01';
  };

  // You have to watch what exactly is being changed. Trade object itself never
  // gets changed, so you have to watch its stock prop.
  $scope.$watch('trade.stock', function() {

  });

}]);
