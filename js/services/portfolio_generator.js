StockApp.factory('portfolioGenerator', ['stockService', function(stockService){
  
  var service = {};

  //object with stocks property, points to array of objects, one for each stock

  //contains total stats as top level properties
  _portfolio = {};
  _portfolio.stocks = [];

  var _makeStock = function(transactions){
    //make individual p data for a stock and return it
    var stock = {};
    stock.symbol = function(){
      return transactions[0].symbol;
    };


    var sharesSold = 0;
    var sharesBought = 0;

    var valueBuys = 0;
    var valueSells = 0;
    transactions.forEach(function(t){
      if(t.type === "BUY"){
        sharesBought += t.quantity;

        valueBuys += (t.price * t.quantity); 
      } else if(t.type === "SELL"){
        sharesSold += t.quantity;

        valueSells += (t.price * t.quantity);
      }

    })

    stock.quantity = function(){
      return sharesBought - sharesSold;
    };
    stock.costBasis = function(){
      return valueBuys - valueSells;
    };
    stock.currentPrice = function(date){
      console.log("getting current price");
      var currentDay = new Date(date);

      var current = stockService.findSpecificDay(stock.symbol(), date);
      //keep going back days till one isn't a holiday
      while(!current){
        var prevDay = currentDay.setDate(currentDay.getDate() - 1);
        var prevDate = prevDay.toISOString().slice(0, 10);
        current = stockService.findSpecificDay(stock.symbol(), prevDate);
      };
      booboo = current;
      return current.Close;
    };

    stock.currentValue = function(date){
      return stock.currentPrice(date) * stock.quantity();
    };

    stock.profitLoss = function(date){
      return stock.currentValue(date) - stock.costBasis();
    };

    return stock;
  }

  service.generatePortfolio = function(transactions){
    //turn transactions into a beautiful portfolio
    //reset portfolio
    _portfolio.stocks = [];
    for(ticker in transactions){
      //get data for each transactions[ticker]
      var stock = _makeStock(transactions[ticker]);

      var loadedStocks = stockService.stocksGetter();
      var sym = stock.symbol();

      //only add the stock to the portfolio if stockService has loaded it
      if(loadedStocks[sym]){
        _portfolio.stocks.push(stock);
      }
      
    }
    //add portfolio wide data

    return _portfolio;
  };

  return service;
}]);