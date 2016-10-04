StockApp.factory("portfolioService", [function(){
  
  var service = {};

  //Symbol is key and array of transactions is value
  _cash = 1000000;





  service.availableCash = function(){
    return _cash
  };

  return service;
}]);