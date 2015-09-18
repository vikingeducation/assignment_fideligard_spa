app.factory('transactionService', function(){
  var _money = { total: 100000.00 };
  var _transactions = { record: [{
                                  action: "true",
                                  cost: 531.820023,
                                  date: new Date('Fri Apr 04 2014 00:00:00 GMT-0500 (CDT)'),
                                  price: 531.820023,
                                  quantity: 1,
                                  symbol: "AAPL"
                                },
                                {
                                  action: "true",
                                  cost: 44.95,
                                  date: new Date('Fri Aug 20 2014 00:00:00 GMT-0500 (CDT)'),
                                  price: 44.95,
                                  quantity: 1,
                                  symbol: "MSFT",
                                }] };

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
    _transactions.record.push(tradeData);
    console.log(_transactions);
  }

  return {
    getMoney: getMoney,
    getTransactions: getTransactions,
    addBuyTransaction: addBuyTransaction
  }

});
