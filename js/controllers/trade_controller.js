StockPortfolioSimulator.controller('TradeController', 
  ['$scope', '$stateParams', 'StocksService', 'UserService', 
  function($scope, $stateParams, StocksService, UserService){

  // ---------------------------
  // Private
  // ---------------------------

  var _init = function(){
    $scope.stock = StocksService.getChosenStock();

    $scope.transactionProperties = UserService.getTransactionProperties();

    _setCashAvailable();
  };

  var _setCashAvailable = function(){
    $scope.cashAvailable = UserService.returnCashAvailable( $scope.stock.date );
  };

  var _validToBuy = function(){
    if ( ($scope.transactionProperties.transactionQuantity * $scope.stock.priceOnDate) <= $scope.cashAvailable && ($scope.transactionProperties.transactionQuantity * $scope.stock.priceOnDate) > 0 ) {
      return 'Valid';
    } else {
      return 'Invalid';
    };
  };

  var _validToSell = function(){
    if( $scope.transactionProperties.transactionQuantity > 0 && $scope.quantityUserOwns() >= $scope.transactionProperties.transactionQuantity ){
      return 'Valid';
    } else {
      return 'Invalid';
    };
  };

  // ---------------------------
  // Public
  // ---------------------------

  $scope.transactionProperties;
  $scope.stock;

  // I think it's time to make a purchase
  $scope.placeOrder = function(){
    if ($scope.transactionProperties.transactionQuantity > 0) {
      if ($scope.transactionProperties.buyOrSell === 'buy'){
        UserService.buyStock( $scope.stock.date, 
                              $scope.stock.priceOnDate, 
                              $scope.transactionProperties.transactionQuantity, 
                              $scope.stock.symbol );
      } else {
        UserService.sellStock( $scope.stock.priceOnDate, $scope.transactionProperties.transactionQuantity, $scope.stock.symbol );
      };
      _setCashAvailable();
    };
  };

  $scope.valid = function(){
    if($scope.transactionProperties.buyOrSell === 'buy'){
      return _validToBuy();
    } else {
      return _validToSell();
    };
  };

  _init();

}]);