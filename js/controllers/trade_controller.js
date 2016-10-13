StockPortfolioSimulator.controller('TradeController', 
  ['$scope', '$stateParams', 'StocksService', 'UserService', 
  function($scope, $stateParams, StocksService, UserService){

  // ---------------------------
  // Private
  // ---------------------------

  var _setCashAvailable = function(){
    $scope.cashAvailable = UserService.returnCashAvailable( StocksService.getChosenStock().date );
  };

  var _validToBuy = function(){
    if ( ($scope.quantity * $scope.stock.priceOnDate) <= $scope.cashAvailable && ($scope.quantity * $scope.stock.priceOnDate) > 0 ) {
      return 'Valid';
    } else {
      return 'Invalid';
    };
  };

  var _validToSell = function(){
    if( $scope.quantity > 0 && $scope.quantityUserOwns() >= $scope.quantity ){
      return 'Valid';
    } else {
      return 'Invalid';
    };
  };

  // ---------------------------
  // Public
  // ---------------------------

  $scope.buyOrSell = 'buy';

  _setCashAvailable();

  // I think it's time to make a purchase
  $scope.placeOrder = function(){
    if ($scope.quantity > 0) {
      if ($scope.buyOrSell === 'buy'){
        UserService.buyStock( $scope.stock.date, 
                              $scope.stock.priceOnDate, 
                              $scope.quantity, 
                              $scope.stock.symbol );
        _setCashAvailable();
      } else {
        UserService.sellStock( $scope.stock.priceOnDate, $scope.quantity, $scope.stock.symbol );
        _setCashAvailable();
      };
    };
  };

  $scope.stock = StocksService.getChosenStock();

  $scope.quantity = 0;

  $scope.quantityUserOwns = function(){
    return UserService.returnQuantityUserOwns( $scope.stock.date, $scope.stock.symbol );
  };

  $scope.valid = function(){
    if($scope.buyOrSell === 'buy'){
      return _validToBuy();
    } else {
      return _validToSell();
    };
  };

}]);