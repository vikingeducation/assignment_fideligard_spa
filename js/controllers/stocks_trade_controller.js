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
    TradeService.setUserData($scope.trade);
  };

  $scope.formattedDate = function() {
    if ($scope.trade.stock.Date) {
      return new Date($scope.trade.stock.Date.replace('-','/'));
    } else {
      return new Date('2015/01/01');
    }
  };

  $scope.showCost = function() {
    if ($scope.trade.formData.cost) {
      return $scope.trade.formData.cost;
    }
  };

  $scope.computeCost = function() {
    var priceQuant = _.map(
                      _.slice(newValues,0,2),
                      _.parseInt
                    );
    _.multiply(priceQuant[0],priceQuant[1]);
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
      $scope.trade.formData.price = newValues[1];
      $scope.trade.formData.cost = $scope.computeCost();
      $scope.trade.formData.date = $scope.formattedDate();
    }
  );

}]);
