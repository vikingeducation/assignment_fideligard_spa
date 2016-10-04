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
  }






  return service;
}])