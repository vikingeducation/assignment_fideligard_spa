tradeApp.factory('transactionService', [function(){

  var _transactions = []; // [{user: {symbol, quantity, date, price}} ]

  // Portfolio
  obj.buyStock = function(user, symbol, quantity, date, price){
    var transaction = {};
    transaction.symbol = symbol;
    transaction.quantity = quantity;
    transaction.date = date;
    transaction.price = price;
    _portfolio.push(transaction);
    _balance -= quantity*price;
  };

}]);