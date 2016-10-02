app.controller('StocksTradeCtrl',
['$scope', 'StockService', 'TradeService',
function($scope, StockService, TradeService) {

  $scope.trade = StockService.getSelectedStock();
  $scope.trade.formData = {};
  TradeService.setUserData($scope.trade);

  // $scope.showType = function() {
  //   console.log($scope.trade.formDtype);
  // };

  $scope.placeOrder = function() {
    TradeService.placeOrder($scope.trade);
    TradeService.setUserData($scope.trade);
  };

  $scope.formattedDate = function() {
    if ($scope.trade.stock.Date) {
      return new Date($scope.trade.stock.Date.replace('-','/'));
    } else {
      return new Date('2015/01/01');
    }
  };

  // Cost helpers.
  $scope.showCost = function() {
    if ($scope.trade.formData.cost) {
      return $scope.trade.formData.cost;
    }
  };

  $scope.computeCost = function(quant, price) {
    return quant ? _.multiply(quant,price) : price;
  };

  $scope.showOrderStatus = function(status) {
    return status ? 'VALID' : 'INVALID';
  };

  // You have to watch what exactly is being changed. Trade object itself never
  // gets changed, so you have to watch its stock prop.
  // However, trade.stock always gets re-assigned, so you can watch the
  // stock object nested within trade.
  $scope.$watchGroup(
    ['trade.formData.quantity',
    'trade.stock.Close',
    'trade.stock'],
    function(newValues) {
      $scope.trade.formData.quantity = newValues[0];
      $scope.trade.formData.price = newValues[1];
      $scope.trade.formData.cost = $scope.computeCost(newValues[0], newValues[1]);
      $scope.trade.formData.date = $scope.formattedDate();
    }
  );

}]);
