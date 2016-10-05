StockApp.factory("transactionService", [function(){

  var service = {};

  //ticker as key and transactions as value
  var _transactions = {};

  service.transaction = function(date, symbol, type, quantity, price){
    this.date = date;
    this.symbol = symbol;
    this.type = type;
    this.quantity = quantity;
    this.price = price;
  };


  service.createTransaction = function(date, symbol, type, quantity, price){
    var transaction = new service.transaction(date, symbol, type, quantity, price);
    if(_transactions[symbol]){
      _transactions[symbol].push(transaction);
    } else {
      _transactions[symbol] = [];
      _transactions[symbol].push(transaction);
    }
    
  };

  service.transactionsByStock = function(){
    return _transactions;
  };

  service.allTransactions = function(){
    var result = [];
    for(ticker in _transactions){
      _transactions[ticker].forEach(function(transaction){
        result.push(transaction);
      });
    };
    return result;
  };

  var _seedTransactions = function(){
    //var dates = ['2015-01-03','2015-01-04','2015-01-05','2015-01-06',];
    var tickers = ['AAPL', 'NFLIX', 'CSCO', 'INTU'];

    //price is just a random number for some basic seed date
    for(var i = 0; i < 4; i++){
      service.createTransaction('2015-01-02', tickers[i], "BUY", 50, 137)
    }
  };


  _seedTransactions();

  service.transactionsBeforeDate = function(date){
    var originalDate = new Date(date);
    var transactionsBeforeDate = {};
    o = originalDate;
    t = _transactions;
    //console.log(JSON.stringify(_transactions,null,''));
    for(ticker in _transactions){
      _transactions[ticker].forEach(function(transaction){
        var tDate = new Date(transaction.date);
        if(tDate <= originalDate){

          if(transactionsBeforeDate[ticker]){
            transactionsBeforeDate[ticker].push(transaction);
          } else {
            transactionsBeforeDate[ticker] = [];
            transactionsBeforeDate[ticker].push(transaction);
          }
        }
      });
    };
    return transactionsBeforeDate;
  };




  return service;
}])