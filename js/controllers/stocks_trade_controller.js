app.controller('StocksTradeCtrl',
['$scope', 'StockService', 'TradeService',
function($scope, StockService, TradeService) {

  $scope.trade = StockService.getSelectedStock();
  TradeService.setUserData($scope.trade);
  $scope.trade.formData = {};

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

  $scope.maxQuant = function() {
    if ($scope.trade.formData.type === 'sell') {
      var owned = $scope.trade.user.owned[$scope.trade.formData.symbol];
      return owned ? owned.quantity : 0;
    } else {
      // 0 = cashAvailable - (price * quant)
      // 0 - cashAvailable = - (price * quant)
      // cashAvailalable = (price * quant)
      // cashAvailable / price = quant
      return ($scope.trade.user.cashAvailable / $scope.trade.stock.Close);
    }
  };

  $scope.minQuant = function() {
    if ($scope.trade.formData.type === 'sell') {
      var owned = $scope.trade.user.owned[$scope.trade.formData.symbol];
      return owned.quantity ? 1 : Number.MAX_SAFE_INTEGER;
    }
    return 1;
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
