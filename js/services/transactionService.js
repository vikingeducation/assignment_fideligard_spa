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

  function addBuyTransaction(tradeData){
    _transactions.push(tradeData);
    console.log(_transactions);
  }

  return {
    getMoney: getMoney,
    getTransactions: getTransactions,
    addBuyTransaction: addBuyTransaction
  }

});
