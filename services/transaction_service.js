Fideligard.factory('transactionService', [function() {

  var _transactions = [];

  stub = {};

  stub.addTransaction = function(date, symbol, type, quantity, price) {
    var transaction = {
      date: date,
      symbol: symbol,
      type: type,
      quantity: quantity,
      price: price
    };
    _transactions.push(transaction);
  };

  stub.getTransactions = function() {
    return _transactions;
  }

  return stub;

}]);