StockApp.factory('portfolioGenerator', ['stockService', function(stockService){
  
  var service = {};

  //object with stocks property, points to array of objects, one for each stock

  //contains total stats as top level properties
  _portfolio = {};
  _portfolio.stocks = [];

  var _makeStock = function(transactions, date){
    //make individual p data for a stock and return it
    console.log("making stock");
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
        console.log("in the g portfolio transaction loop");
        //get data for each transactions[ticker]
        var stock = _makeStock(transactions[ticker], date);

        console.log("made the stock");
        
        var sym = stock.symbol();

        _portfolio.stocks.push(stock);
      }
      
    }
    //add portfolio wide data
    console.log("done generating portfolio");
    //console.log("here is the portfolio" + _portfolio);
    return _portfolio;
  };// end generate portfolio

  return service;
}]);