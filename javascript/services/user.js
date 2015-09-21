tradeApp.factory('userService', [function(){

  obj = {};

  var _name = 'Abe';
  var _balance = 100000;
  var _portfolio = {}; // {symbol: quantity}
  var _transactions = []; // [{user: {symbol, quantity, date, price}} ]

  var buy = true;

  obj.buyStock = function(symbol, quantity, date, price){
    _transact(_name, symbol, quantity, date, price);
    _updatePortfolio(symbol, quantity);
    _balance -= quantity*price;
  };

  obj.sellStock = function(symbol, quantity, date, price){
    _transact(_name, symbol, quantity, date, price);
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

  // Transaction
  var _transact = function(name, symbol, quantity, date, price){
    var transaction = {};
    transaction.symbol = symbol;
    transaction.quantity = quantity;
    transaction.date = date;
    transaction.price = price;
    _transactions.push(transaction);
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
    return  _checkBalance(expenditure) &&
            _checkQuantity(stock, quantity, transaction) ?
            true : false;
  };

  var _checkBalance = function(expenditure){
    console.log(expenditure > _balance ? false : true);
    return expenditure > _balance ? false : true;
  };

  var _checkQuantity = function(stock, quantity, transaction){
    console.log(_portfolio, quantity);
    if (transaction == 'Sell'){
      return _portfolio[stock] >= parseInt(quantity) ? true : false;
    } else {
      return true;
    }
  };

  return obj;

}]);