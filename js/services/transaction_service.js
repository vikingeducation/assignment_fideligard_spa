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






  return service;
}])