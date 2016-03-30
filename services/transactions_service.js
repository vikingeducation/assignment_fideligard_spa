fideligard.factory('TransactionsService', function() {

  var obj = {};

  obj.transactions = [{date: 1393632000000, symbol: "LULU", transactionType: "buy", quantity: 100, price: "50.310001"}];

  obj.getTransactions = function() {
    return obj.transactions;
  }






  return obj;

})