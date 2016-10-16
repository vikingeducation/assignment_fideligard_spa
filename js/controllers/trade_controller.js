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

  var _validToBuy = function( cashAvailable, price, transactionQuantity ){
    return transactionQuantity > 0 && UserService.enoughMoneyToBuy( price, transactionQuantity, cashAvailable );
  };

  var _validToSell = function( availableQuantity, transactionQuantity ){
    return transactionQuantity > 0 && UserService.enoughStockToSell( availableQuantity, transactionQuantity );
  };

  // ---------------------------
  // Public
  // ---------------------------

  $scope.transactionProperties;
  $scope.stock;

  // If the user has entered a number above 0
  // depending on whether user has selected 'buy' or 'sell'
  // make the transaction happen
  // then set the updated cashAvailable()
  $scope.placeOrder = function(){
    var tP = $scope.transactionProperties;
    var buyOrSell = tP.buyOrSell;
    var transactionQuantity = tP.transactionQuantity;
    var quantityAvailableToSell = tP.quantityAvailableToSell;
    var stock = $scope.stock;
    if (transactionQuantity > 0) {
      if ( buyOrSell === 'buy'){
        UserService.buyStock( stock.date, 
                              stock.priceOnDate, 
                              transactionQuantity, 
                              stock.symbol );
      } else {
        UserService.sellStock( stock.date, 
                               quantityAvailableToSell, 
                               stock.symbol,
                               transactionQuantity );
      };
      _setCashAvailable();
    };
  };

  // This method is being used solely to return 'valid'
  // or 'invalid' right now.
  $scope.valid = function(){
    var stock = $scope.stock;
    var transactionProperties = $scope.transactionProperties;
    var transactionQuantity = transactionProperties.transactionQuantity;
    var quantityAvailableToSell = transactionProperties.quantityAvailableToSell;
    var valid;

    if( transactionProperties.buyOrSell === 'buy' ){
      return _validToBuy( $scope.cashAvailable, stock.priceOnDate, transactionQuantity );
    } else {
      return _validToSell( quantityAvailableToSell, transactionQuantity );
    };
  };

  _init();

}]);