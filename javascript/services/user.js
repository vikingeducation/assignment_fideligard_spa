tradeApp.factory('userService', ['transactionService', 'portfolioService', function(transactionService, portfolioService){

  obj = {};

  var _name = 'Abe';
  var _balance = 100000;
  var _portfolio = {}; // {symbol: quantity}
  var _currentTransactionStatus = '';

  // Buy and sell stock
  obj.buyOrSellStock = function(transactionType, symbol, quantity, date, price){
    if (transactionType === 'Buy'){
      _buyStock(symbol, quantity, date, price);
    } else {
      _sellStock(symbol, quantity, date, price);
    }
  };

  var _buyStock = function(symbol, quantity, date, price){
    transactionService.transact(_name, symbol, quantity, date, price, 'Buy');
    _balance -= quantity*price;
    portfolioService.updatePortfolio(symbol, quantity, date, _balance);
  };

  var _sellStock = function(symbol, quantity, date, price){
    transactionService.transact(_name, symbol, quantity, date, price, 'Sell');
    _balance += quantity*price;
    portfolioService.updatePortfolio(symbol, -quantity, date, balance);
  };

  // Balance
  obj.getBalance = function(){
    return _balance;
  };

  obj.setBalance = function(expenditure){
    _balance -= expenditure;
  };

  // Check transaction is valid
  obj.checkTransaction = function(expenditure, stock, quantity, transaction){
    if (quantity <= 0){return false;}
    return  _checkBalance(expenditure) &&
            _checkQuantity(stock, quantity, transaction) ?
            true : false;
  };

  var _checkBalance = function(expenditure){
    if (expenditure > _balance){
      _currentTransactionStatus = ': Insufficient funds';
      return false;
    } else {
      _currentTransactionStatus = '';
      return true;
    }
  };

  var _checkQuantity = function(stock, quantity, transaction){
    if (transaction == 'Sell'){
      if (portfolioService.getPortfolio()[stock] >= parseInt(quantity)){
        _currentTransactionStatus = '';
        return true;
      } else {
        _currentTransactionStatus = ': Insufficient stock in portfolio';
        return false;
      }
    } else {
      return true;
    }
  };

  obj.getCurrentTransactionStatus = function(){
    return _currentTransactionStatus;
  }

  return obj;

}]);