StockPortfolioSimulator.controller('TradeController', 
  ['$scope', '$stateParams', 'StocksService', 'UserService', 
  function($scope, $stateParams, StocksService, UserService){

  // ---------------------------
  // Public
  // ---------------------------

  $scope.cashAvailable = UserService.returnCashAvailable();

  $scope.stock = StocksService.getChosenStock();

  $scope.quantity = 0;

  $scope.valid = function(){
    return (($scope.quantity * $scope.stock.priceOnDate) <= $scope.cashAvailable && ($scope.quantity * $scope.stock.priceOnDate) > 0) ? 'Valid' : 'Invalid'
  };

}]);