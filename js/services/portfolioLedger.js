var SEED_TRANSACTIONS = [
  {
    date: new Date('3-10-2014'),
    symbol: "AAPL",
    type: "Buy",
    quantity: 20,
    price: 530.92
  },
  {
    date: new Date('3-15-2014'),
    symbol: "AAPL",
    type: "Sell",
    quantity: 5,
    price: 524.69
  },
  {
    date: new Date('5-1-2014'),
    symbol: "GOOG",
    type: "Buy",
    quantity: 100,
    price: 531.35
  }
];

simulator.factory('portfolioLedger', ['dateHelper', '$filter', 
  function(dateHelper, $filter){

  var _startingBalance = 200000;
  var _transactions = SEED_TRANSACTIONS;

  var addTransaction = function(transaction){
    return new Promise(
      function(resolve){
        resolve(_transactions.push(transaction));
      }
    );
  };

  var getTransactions = function(){
    return _transactions;
  };

  var cashOnHand = function(date){
    var cash = _startingBalance;
    var transactions;

    if (date){
      workingSet = _upToDate(date, _transactions);
    } else {
      workingSet = _transactions;
    }

    workingSet.forEach(function(trs){
      if (trs.type == "Buy"){
        cash -= trs.price * trs.quantity;
      } else {
        cash += trs.price * trs.quantity;
      }
    });

    return cash;
  };

  var quantityOnHand = function(symbol, date){
    var quantity = 0;
    var transactions;

    if (date){
      workingSet = _upToDate(date, _transactions);
    } else {
      workingSet = _transactions;
    }

    workingSet.forEach(function(trs){
      if (trs.symbol == symbol) {      
        if (trs.type == "Buy"){
          quantity += trs.quantity;
        } else {
          quantity -= trs.quantity;
        }
      }
    });

    return quantity;
  };

  var _upToDate = function(date, arr){
    return arr.filter(function(elem){
      return elem.date <= date;
    });
  };


  return {
    addTransaction: addTransaction,
    getTransactions: getTransactions,
    cashOnHand: cashOnHand,
    quantityOnHand: quantityOnHand,
  };

}]);