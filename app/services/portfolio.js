
stocks.factory('portfolioService', function() {
  
  var obj = {};
  var stocks = [];
  var testLength = 3;
  var testSymbols = ['MSFT', 'INTC', 'ORCL'];
  var testPrice = [ 30.01, 18.22, 21.31];
  var testNames = ['Microsoft', 'Intel', 'Oracle'];

  obj.createStock = function(index) {
    var stock = {};
    stock.symbol = testSymbols[index];
    stock.name = testNames[index];
    stock.price = testPrice[index];
    // stock.description = testSymbols[index];
    // stock.id = currentStockID;
    // currentStockID++;
    stocks.push( stock );
  };

  obj.getStocks = function() {
    return stocks;
  };

  obj.setupPortfolio = function() {
    if (stocks.length === 0) {
      for(var i = 0; i < testLength; i++) {
        obj.createStock(i);
      };
    };
  };

  return obj;
});

