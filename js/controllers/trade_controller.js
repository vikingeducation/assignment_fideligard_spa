StockPortfolioSimulator.controller('TradeController', 
  ['$scope', '$stateParams', 'StocksService', 'TransactionsService', 'UserService', 
  function($scope, $stateParams, StocksService, TransactionsService, UserService){

  $scope.cashAvailable;
  $scope.quantityAvailableToSell;
  $scope.stock;
  $scope.transactionProperties;

  // ---------------------------
  // Private
  // ---------------------------

  var _init = function(){
    $scope.stock = StocksService.getChosenStock();

    _setCashAvailable( $scope.stock.date );

    _setQuantityAvailableToSell( $scope.stock.date, $scope.stock.symbol );

    $scope.transactionProperties = TransactionsService.getTransactionProperties();
  };

  var _setCashAvailable = function( date ){
    $scope.cashAvailable = UserService.returnCashAvailable( date );
  };

  var _setQuantityAvailableToSell = function( date, symbol ){
    $scope.quantityAvailableToSell = UserService.returnQuantityAvailableToSell( date, symbol );
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

  // If the user has entered a number above 0
  // depending on whether user has selected 'buy' or 'sell'
  // make the transaction happen
  $scope.placeOrder = function(){
    var tP = $scope.transactionProperties;
    var buyOrSell = tP.buyOrSell;
    var transactionQuantity = tP.transactionQuantity;
    var quantityAvailableToSell = $scope.quantityAvailableToSell;
    var stock = $scope.stock;
    if ( buyOrSell === 'buy' ){
      UserService.buyStock( stock.date, 
                            stock.priceOnDate, 
                            transactionQuantity, 
                            stock.symbol );
    } else {
      UserService.sellStock( stock.date, 
                             stock.priceOnDate,
                             quantityAvailableToSell, 
                             stock.symbol,
                             transactionQuantity );
    };
    _setCashAvailable( stock.date );
    _setQuantityAvailableToSell( stock.date, stock.symbol );
  };

  // This method is being used solely to return 'valid'
  // or 'invalid' right now.
  $scope.validOrInvalid = function(){
    var stock = $scope.stock;
    var transactionProperties = $scope.transactionProperties;
    var cashAvailable = $scope.cashAvailable;
    var transactionQuantity = transactionProperties.transactionQuantity;
    var quantityAvailableToSell = $scope.quantityAvailableToSell;
    var valid;

    if( transactionProperties.buyOrSell === 'buy' ){
      valid = _validToBuy( cashAvailable, stock.priceOnDate, transactionQuantity );
    } else {
      valid = _validToSell( quantityAvailableToSell, transactionQuantity );
    };

    return valid ? "Valid" : "Invalid";
  };

  _init();

}]);