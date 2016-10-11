StockPortfolioSimulator.controller('TradeController', 
  ['$scope', '$stateParams', 'StocksService',
  function($scope, $stateParams, StocksService){

  // ---------------------------
  // Functions
  // ---------------------------

  // ---------------------------
  // Private
  // ---------------------------

  // ---------------------------
  // Public
  // ---------------------------

  $scope.stock = StocksService.getChosenStock();

  $scope.quantity = 0;

}]);