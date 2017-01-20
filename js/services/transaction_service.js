Fideligard.factory('transactionService', function () {

  var _transactions = [];
  var _userCash = 20000.00;
  var _userStocks = {};

  var transactionService = {};

  transactionService.getCashAvailable = function() {
    return _userCash;
  }

  transactionService.getUserStocks = function() {
    return _userStocks;
  }

  transactionService.getTransactions = function() {
    return _transactions;
  }

  transactionService.trade = function(tradeParams) {
    obj = angular.copy(tradeParams, {});
    _transactions.push(obj);
    _updateUserStocks(obj);
  }


  _updateUserStocks = function(tradeParams) {
    var symbol = tradeParams.symbol;
    var type = tradeParams.type;
    var qty  = type === 'buy' ? tradeParams.quantity : -tradeParams.quantity;
    var cash = type === 'buy' ? -(tradeParams.quantity * tradeParams.price)  : tradeParams.quantity * tradeParams.price;
    if (_userStocks[symbol] != undefined) {
      _userStocks[symbol].quantity += qty;
      _userStocks[symbol].costBasis += cash;
      _userStocks[symbol].profitLoss = (_userStocks[symbol].quantity * tradeParams.price) - _userStocks[symbol].costBasis;
    } else {
      _userStocks[symbol] = { key: symbol, quantity: qty, costBasis: 0, profitLoss: 0 };
    }
    _userCash += cash;
  }

  return transactionService;
});