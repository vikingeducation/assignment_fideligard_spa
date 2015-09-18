app.factory('transactionService', ["$filter", function($filter){
  var money = { total: 100000.00 };
  var transactions = { record: [{
                                  action: "true",
                                  cost: 531.820023,
                                  Date: new Date("04-04-2014"),
                                  price: 531.820023,
                                  quantity: 1,
                                  symbol: "AAPL"
                                },
                                {
                                  action: "true",
                                  cost: 44.95,
                                  Date: new Date("08-20-2014"),
                                  price: 44.95,
                                  quantity: 1,
                                  symbol: "MSFT",
                                }] };

  // Day bought
  // Symbol
  // Total amount bought

  // function getMoney(){
  //   return _money;
  // }

  // function getTransactions(){
  //   return _transactions;
  // }

  function addTransaction(tradeData){
    transactions.record.push(tradeData);
    // console.log(transactions);
  }

  // function getPortfolio(date) {
  //   var transactionsBefore = $filter("beforeDateFilter")(_transactions.record, date);
  //   var portfolio = {};
  //   transactionsBefore.forEach(function(ele) {
  //     if (portfolio[ele.symbol]) {
  //       if (ele.action == "true") {
  //         portfolio[ele.symbol].quantity += ele.quantity;
  //         portfolio[ele.symbol].costBasis += ele.quantity * ele.price;
  //       } else {
  //         portfolio[ele.symbol].quantity -= ele.quantity;
  //         portfolio[ele.symbol].costBasis -= ele.quantity * ele.price;
  //       }
        
  //     } else {
  //       portfolio[ele.symbol] = {};
  //       portfolio[ele.symbol].quantity = ele.quantity;
  //       portfolio[ele.symbol].costBasis = ele.quantity * ele.price;
  //     }
  //   })
  //   return portfolio;
  // }

  return {
    // getMoney: getMoney,
    // getTransactions: getTransactions,
    money: money,
    transactions: transactions,
    addTransaction: addTransaction,
    // getPortfolio: getPortfolio
  }

}]);
