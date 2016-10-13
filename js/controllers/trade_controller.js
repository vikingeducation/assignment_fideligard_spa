StockPortfolioSimulator.controller('TradeController', 
  ['$scope', '$stateParams', 'StocksService', 'UserService', 
  function($scope, $stateParams, StocksService, UserService){

  // ---------------------------
  // Private
  // ---------------------------

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

  $scope.cashAvailable = UserService.returnCashAvailable( StocksService.getChosenStock() );


  $scope.placeOrder = function(){
    if ($scope.buyOrSell === 'buy'){
      // we want to
      // reduce the amount of cash we have now
      // change the quantity of stock we have at that date and then proceed to alter the quantity for all days afterwards...
    } else {

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