app.factory('transactionService', ["$filter", function($filter){
  var transactions =  [
                        // {
                        //   action: true,
                        //   cost: 5318.20023,
                        //   date: new Date('Fri Apr 04 2014 00:00:00 GMT-0500 (CDT)'),
                        //   price: 531.820023,
                        //   quantity: 10,
                        //   symbol: "AAPL"
                        // },
                        // {
                        //   action: true,
                        //   cost: 44.95,
                        //   date: new Date('Fri Aug 20 2014 00:00:00 GMT-0500 (CDT)'),
                        //   price: 44.95,
                        //   quantity: 1,
                        //   symbol: "MSFT",
                        // },
                        // {
                        //   action: true,
                        //   cost: 67835.727417,
                        //   date: new Date('Jan 23 2014 00:00:00 GMT-0500 (CDT)'),
                        //   price: 551.509979,
                        //   quantity: 123,
                        //   symbol: "AAPL",
                        // },
                        // {
                        //   action: false,
                        //   cost: 66964.887171,
                        //   date: new Date('Feb 22 2014 00:00:00 GMT-0500 (CDT)'),
                        //   price: 544.429977,
                        //   quantity: 123,
                        //   symbol: "AAPL",
                        // }
                      ]

  // Day bought
  // Symbol
  // Total amount bought

  // For the portfolio, the quantity of held shares and the cost
  // basis for a given symbol are required from this service.


  function addTransaction(tradeData){
    transactions.push(tradeData);
  }

  function getMoney(date){
    var startingMoney = 100000;
    var spentMoney = calculateSpentMoney(date);
    var profits = calculateProfits(date);

    return startingMoney - spentMoney + profits;
  }

  function getFutureMoney(){
    return getMoney(new Date('12/31/2014'))
  }

  function calculateSpentMoney(date){
    return $filter("beforeDateFilter")(transactions, date).filter(function (el){
      return el.action
    }).reduce(function (total, el){
      return total += el.cost;
    }, 0)
  }

  function calculateProfits(date){
    return $filter("beforeDateFilter")(transactions, date).filter(function (el){
      return !el.action
    }).reduce(function (total, el){
      return total += el.cost;
    }, 0)
  }

  // To make a purchase you both need sufficient money,
  // and this purchase cannot cause a future purchase to put you in the red.
  function validateBuy(date, cost){
    // Calculate how much money we'd have at the given date if we bought
    var currentMoney = getMoney(date) - cost;

    // If we have insufficient funds right now, return false.
    if (currentMoney < 0) return false;

    // Get a list of all transactions that happen on/after this date.
    // Sort them by date.
    var futureTransactions = $filter("afterDateFilter")(transactions, date).sort(function(a, b){
      return new Date(a.date) - new Date(b.date);
    });

    // Return whether every transaction applied in order never puts us in red.
    return futureTransactions.every(function (el){
      currentMoney += el.action ? -el.cost : el.cost
      return (currentMoney >= 0);
    })
  }

  // Perform the same validation as buying but checking the integrity
  // of the share count instead.
  function validateSale(symbol, date, quantity){
    var currentShares = countShares(symbol, date) - quantity;

    if (currentShares < 0 || isNaN(quantity)) return false;

    var futureTransactions = $filter("afterDateFilter")(transactions, date).sort(function(a, b){
      return new Date(a.date) - new Date(b.date);
    });

    return futureTransactions.every(function (el){
      currentShares += el.action ? el.quantity : -el.quantity
      return (currentShares >= 0);
    })
  }

  // Finds the first sale of a given symbol on/after the given date.
  function countFutureShares(symbol){
    return countShares(symbol, new Date('12/31/2014'))
  }

  // Calculates the value of shares held using transactions before/on
  // given date.
  function countShares(symbol, date) {
    return $filter("beforeDateFilter")(transactions, date)
    .reduce(function(total, ele){
      if (ele.symbol == symbol && ele.action) {
        total += ele.quantity;
      } else if (ele.symbol == symbol) {
        total -= ele.quantity;
      }
      return total;
    }, 0)
  }

  function portfolio(date) {
    var portfolio = $filter("beforeDateFilter")(transactions, date).reduce(function (result, el){
      if (!result[el.symbol]) result[el.symbol] = { quantity: 0, cost: 0.00};
      if (el.action){
        result[el.symbol].quantity += el.quantity;
        result[el.symbol].cost -= el.cost;
      } else {
        result[el.symbol].quantity -= el.quantity;
        result[el.symbol].cost += el.cost;
      }
      return result;
    }, {})

    var filteredPortfolio = [];

    for (symbol in portfolio){
      // if (portfolio[symbol].quantity > 0){
      var portfolioRow = portfolio[symbol]
      portfolioRow.symbol = symbol;
      filteredPortfolio.push(portfolioRow)
      // }
    }

    return filteredPortfolio;
  }

  return {
    getMoney: getMoney,
    getFutureMoney: getFutureMoney,
    transactions: transactions,
    addTransaction: addTransaction,
    validateSale: validateSale,
    validateBuy: validateBuy,
    portfolio: portfolio,
  }

}]);
