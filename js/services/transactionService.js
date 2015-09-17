app.factory('transactionService', function(){
  var _money = { total: 100000.00 };
  var _transactions = [];

  // Day bought
  // Symbol
  // Total amount bought

  function getMoney(){
    return _money;
  }

  function getTransactions(){
    return _transactions;
  }

  function addTransaction(){

  }

  return {
    getMoney: getMoney,
    getTransactions: getTransactions,
    addTransaction: addTransaction,
  }

});
