app.factory('transactionService', 
  ["$filter",
  function($filter){
  var money = { total: 100000.00 };
  // var transactions = { record: [{
  //                                 action: "true",
  //                                 cost: 531.820023,
  //                                 Date: new Date("04-04-2014"),
  //                                 price: 531.820023,
  //                                 quantity: 1,
  //                                 symbol: "AAPL"
  //                               },
  //                               {
  //                                 action: "true",
  //                                 cost: 44.95,
  //                                 Date: new Date("08-20-2014"),
  //                                 price: 44.95,
  //                                 quantity: 1,
  //                                 symbol: "MSFT",
  //                               }] };
  var transactions = { record: [] };

  function addTransaction(tradeData){
    transactions.record.push(tradeData);
    // console.log(transactions);
    _updateMoney(tradeData);
  }

  function _updateMoney(tradeData) {
    if (tradeData.action == "false") {
      money.total += tradeData.cost;
    } else {
      money.total -= tradeData.cost;
    }
  }

  return {
    money: money,
    transactions: transactions,
    addTransaction: addTransaction
  }

}]);
