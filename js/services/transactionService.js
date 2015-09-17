app.factory('transactionService', function(){
  var _money = 100000.00;
  var _transactions = [];

  // Day bought
  // Symbol
  // Total amount bought

  function getTransactions(){
    return _transactions;
  }

  function addTransaction(){

  }

  return {
    getTransactions: getTransactions,
    addTransaction: addTransaction,
  }

});
