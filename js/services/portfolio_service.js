StockApp.factory("portfolioService", ['transactionService', function(transactionService){
  //ADDING THE portfolioGenerator dependency throws nasty error
  var service = {};

  //Symbol is key and array of transactions is value
  _cash = 1000000;

  var _portfolio;

  var _buildPortfolio = function(date){
    var transactions = transactionService.transactionsBeforeDate(date);
    _portfolio = portfolioGenerator.generatePortfolio(transactions);
    return _portfolio;
  }

  service.buildPortfolio = function(date){
    _buildPortfolio(date);
  };
   


  service.availableCash = function(){
    return _cash;
  };

  return service;
}]);