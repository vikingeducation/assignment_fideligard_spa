tradeApp.factory('userService', ['transactionService', function(transactionService){

  obj = {};

  var _name = 'Abe';
  var _balance = 100000;
  var _portfolio = {}; // {symbol: quantity}

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
    _updatePortfolio(symbol, quantity);
    _balance -= quantity*price;
  };

  var _sellStock = function(symbol, quantity, date, price){
    transactionService.transact(_name, symbol, quantity, date, price, 'Sell');
    _updatePortfolio(symbol, -quantity);
    _balance += quantity*price;
  };

  // Portfolio
  var _updatePortfolio = function(symbol, quantity){
    if ( _portfolio[symbol] ){
      _portfolio[symbol] += parseInt(quantity);
    } else {
      _portfolio[symbol] = parseInt(quantity);
    }
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
    return expenditure > _balance ? false : true;
  };

  var _checkQuantity = function(stock, quantity, transaction){
    if (transaction == 'Sell'){
      return _portfolio[stock] >= parseInt(quantity) ? true : false;
    } else {
      return true;
    }
  };

  return obj;

}]);