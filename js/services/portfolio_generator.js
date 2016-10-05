StockApp.factory('portfolioGenerator', ['stockService', function(stockService){
  
  var service = {};

  //object with stocks property, points to array of objects, one for each stock

  //contains total stats as top level properties
  _portfolio = {};
  _portfolio.stocks = [];

  var _makeStock = function(transactions, date){
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
    stock.currentPrice = function(){
      var currentDay = new Date(date);

      var current = stockService.findSpecificDay(stock.symbol(), date);
      //keep going back days till one isn't a holiday
      while(!current){
        //sets currentDay one day back
        currentDay.setDate(currentDay.getDate() - 1);
        
        var prevDateString = currentDay.toISOString().slice(0, 10);
        current = stockService.findSpecificDay(stock.symbol(), prevDateString);
      };
      
      return current.Close;
    };

    stock.currentPrice = stock.currentPrice();

    stock.currentValue = function(){
      return stock.currentPrice * stock.quantity();
    };

    stock.profitLoss = function(date){
      return stock.currentValue() - stock.costBasis();
    };

    return stock;
  }

  service.generatePortfolio = function(transactions, date){
    //turn transactions into a beautiful portfolio
    //reset portfolio
    var loadedStocks = stockService.stocksGetter();
    console.log("generating portfolio");
    _portfolio.stocks = [];
    for(ticker in transactions){
      if(loadedStocks[ticker]){
        //get data for each transactions[ticker]
        var stock = _makeStock(transactions[ticker], date);        
        var sym = stock.symbol();

        _portfolio.stocks.push(stock);
      }
      
    }
    console.log("done generating portfolio");
    //add portfolio wide data
    
    return _portfolio;
  };// end generate portfolio

  return service;
}]);