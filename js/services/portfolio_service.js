StockApp.factory("portfolioService", ['portfolioGenerator', function(portfolioGenerator){
  
  var service = {};

  //Symbol is key and array of transactions is value
  _cash = 1000000;

  var _portfolio;

  var _buildPortfolio = function(date){
    
    _portfolio = portfolioGenerator.generatePortfolio(date);
    return _portfolio;
  }

  service.buildPortfolio = function(date){
    return _buildPortfolio(date);
  };
   


  service.availableCash = function(){
    return _cash;
  };

  return service;
}]);