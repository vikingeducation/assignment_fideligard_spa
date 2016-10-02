app.controller('StocksTradeCtrl',
['$scope', 'StockService', 'TradeService',
function($scope, StockService, TradeService) {

  $scope.trade = StockService.getSelectedStock();
  $scope.trade.formData = {};
  $scope.trade.user = {
    cashAvailable: 1000
  };

  $scope.placeOrder = function() {
    TradeService.placeOrder($scope.trade);
  };

  $scope.formattedDate = function() {
    return $scope.trade.stock.Date ? $scope.trade.stock.Date : '2015-01-01';
  };

  $scope.showCost = function() {
    if ($scope.trade.formData.cost) {
      return $scope.trade.formData.cost;
    }
  };

  // You have to watch what exactly is being changed. Trade object itself never
  // gets changed, so you have to watch its stock prop.
  $scope.$watchGroup(
    ['trade.formData.quantity',
    'trade.formData.price',
    'trade.stock.Close'],
    function(newValues) {
      $scope.trade.formData.price = newValues[2];
      $scope.trade.formData.cost = parseInt(_.multiply(newValues.slice(0,1)));
    }
  );

}]);
