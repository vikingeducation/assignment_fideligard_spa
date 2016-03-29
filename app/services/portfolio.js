stocks.factory('PortfolioService', function() {

  var PortfolioService = {};
  var stocks = [];
  var testLength = 3;
  var testSymbols = ['MSFT', 'INTC', 'ORCL'];
  var testPrice = [ 30.01, 18.22, 21.31];
  var testNames = ['Microsoft', 'Intel', 'Oracle'];

  PortfolioService.createStock = function(index) {
    var stock = {};
    stock.symbol = testSymbols[index];
    stock.name = testNames[index];
    stock.price = testPrice[index];
    // stock.description = testSymbols[index];
    // stock.id = currentStockID;
    // currentStockID++;
    stocks.push( stock );
  };

  PortfolioService.getStocks = function() {
    return stocks;
  };

  PortfolioService.setupPortfolio = function() {
    if (stocks.length === 0) {
      for(var i = 0; i < testLength; i++) {
        PortfolioService.createStock(i);
      }
    }
  };

  PortfolioService.setupPortfolio();

  return PortfolioService;
});

