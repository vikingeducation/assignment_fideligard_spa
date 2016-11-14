StockPortfolioSimulator.controller('TradeController', 
  ['$scope', '$stateParams', 'PortfolioService', 'StocksService', 'TransactionsService', 
  function($scope, $stateParams, PortfolioService, StocksService, TransactionsService){

  $scope.stock = StocksService.getChosenStock();
  $scope.portfolio = PortfolioService.returnPortfolio();
  $scope.transactionProperties = TransactionsService.getTransactionProperties();

  // ---------------------------
  // Private
  // ---------------------------

  var _validToBuy = function( date, price, transactionQuantity ){
    return transactionQuantity > 0 && PortfolioService.enoughMoneyToBuy( date, price, transactionQuantity );
  };

  var _validToSell = function( date, symbol, transactionQuantity ){
    return transactionQuantity > 0 && PortfolioService.enoughStockToSell( date, symbol, transactionQuantity );
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
    var s = $scope.stock;
    var transactionQuantity = tP.transactionQuantity;

    if ( buyOrSell === 'buy' ){
      if ( _validToBuy( s.date, s.priceOnDate, transactionQuantity ) ){
        TransactionsService.addTransaction( s.date, 
                                   s.priceOnDate, 
                                   transactionQuantity, 
                                   s.symbol,
                                   buyOrSell );
        PortfolioService.buyStock( s.date, 
                                   s.priceOnDate, 
                                   transactionQuantity, 
                                   s.symbol );
      };
    } else {
      if ( _validToSell( s.date, s.symbol, transactionQuantity ) ){
        TransactionsService.addTransaction( s.date, 
                           s.priceOnDate, 
                           transactionQuantity, 
                           s.symbol,
                           buyOrSell );
        
        PortfolioService.sellStock( s.date,
                       s.priceOnDate,
                       s.symbol,
                       transactionQuantity );
      };
    };
  };

  // This method is being used solely to return 'valid'
  // or 'invalid' right now.
  $scope.validOrInvalid = function(){
    var stock = $scope.stock;
    var transactionProperties = $scope.transactionProperties;
    var transactionQuantity = transactionProperties.transactionQuantity;
    var valid;

    if( transactionProperties.buyOrSell === 'buy' ){
      valid = _validToBuy( stock.date, stock.priceOnDate, transactionQuantity );
    } else {
      valid = _validToSell( stock.date, stock.symbol, transactionQuantity );
    };

    return valid ? "Valid" : "Invalid";
  };

}]);