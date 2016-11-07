StockPortfolioSimulator.controller('TradeController', 
  ['$scope', '$stateParams', 'StocksService', 'TransactionsService', 'UserService', 
  function($scope, $stateParams, StocksService, TransactionsService, UserService){

  $scope.stock = StocksService.getChosenStock();
  $scope.portfolio = UserService.returnPortfolio();
  $scope.transactionProperties = TransactionsService.getTransactionProperties();
  $scope.cashAvailable = $scope.portfolio[$scope.stock.date][$scope.stock.symbol].cashAvailable;

  // ---------------------------
  // Private
  // ---------------------------

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
    var quantityAvailableToSell = $scope.portfolio[$scope.stock.date][$scope.stock.symbol].quantityAvailableToSell;
    if ( buyOrSell === 'buy' ){
      UserService.buyStock( $scope.stock.date, 
                            $scope.stock.priceOnDate, 
                            transactionQuantity, 
                            $scope.stock.symbol );
    } else {
      UserService.sellStock( $scope.stock.date, 
                             $scope.stock.priceOnDate,
                             quantityAvailableToSell, 
                             $scope.stock.symbol,
                             transactionQuantity );
    };
  };

  // This method is being used solely to return 'valid'
  // or 'invalid' right now.
  $scope.validOrInvalid = function(){
    var stock = $scope.stock;
    var transactionProperties = $scope.transactionProperties;
    var cashAvailable = $scope.cashAvailable;
    var transactionQuantity = transactionProperties.transactionQuantity;
    var quantityAvailableToSell = $scope.portfolio[$scope.stock.date][$scope.stock.symbol].quantityAvailableToSell;
    var valid;

    if( transactionProperties.buyOrSell === 'buy' ){
      valid = _validToBuy( cashAvailable, stock.priceOnDate, transactionQuantity );
    } else {
      valid = _validToSell( quantityAvailableToSell, transactionQuantity );
    };

    return valid ? "Valid" : "Invalid";
  };

}]);