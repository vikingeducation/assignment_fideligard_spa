stocks.factory('portfolioService', function(stocksService) {

  var obj = {};
  var startingAmt = 1000000;

  var dateObj = stocksService.dateObj;

  obj.transactions = [];
  //nested array with [date, sym, qty, txn, price]

  obj.cashSpent = function(){
    // for(var i)
  };

  obj.cashAvailable = function(){

  };

  //returns an array up to dateSelected
  var transactionsSoFar = function(){
    return $filter('filter')(obj.transactions, {dateNum: dateObj.dateSelected});
  };


  return obj;

});