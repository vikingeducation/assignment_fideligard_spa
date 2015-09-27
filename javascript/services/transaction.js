tradeApp.factory('transactionService', [function(){

  var obj = {};

  var _transactions = []; // [{user: {symbol, quantity, date, price}} ]


  // Transaction
  obj.transact = function(name, symbol, quantity, date, price, type){
    var transaction = {};
    transaction.type = type;
    transaction.symbol = symbol;
    transaction.quantity = quantity;
    transaction.date = date;
    transaction.price = price;
    _transactions.push(transaction);
  };


  obj.getTransactions = function(){
    return _transactions;
  };

  return obj;

}]);