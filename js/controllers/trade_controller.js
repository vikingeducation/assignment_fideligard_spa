StockPortfolioSimulator.controller('TradeController', 
  ['$scope', '$stateParams', 'StocksService'
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

  // So what do I need here
  // I need the stock in question
  $scope.stock = StocksService.returnStockById( $stateParams.id );

}]);