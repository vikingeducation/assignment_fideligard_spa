StockApp.factory('portfolioGenerator', ['stockService', 'transactionService', function(stockService, transactionService){
  
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

    stock.oneDayPerformance = function(){
      var workingDate = new Date(date);
      workingDate.setDate(workingDate.getDate() - 1);
      var dateString = workingDate.toISOString().slice(0, 10);
      var pastPortfolio = service.generateComparablePortfolio(dateString);
      
      var pastVal;
      pastPortfolio.stocks.forEach(function(unit){
        if(stock.symbol() === unit.symbol()){
          pastVal = unit.currentValue();
        }
      })

     
      return stock.currentValue() - pastVal;
     
      
    };

    stock.sevenDayPerformance = function(){
      var workingDate = new Date(date);
      workingDate.setDate(workingDate.getDate() - 7);
      var dateString = workingDate.toISOString().slice(0, 10);
      var pastPortfolio = service.generateComparablePortfolio(dateString);
      var pastVal;
      pastPortfolio.stocks.forEach(function(unit){
        if(stock.symbol() === unit.symbol()){
          pastVal = unit.currentValue();
        }
      })
      return stock.currentValue() - pastVal;
    };

    stock.thirtyDayPerformance = function(){
      var workingDate = new Date(date);
      workingDate.setDate(workingDate.getDate() - 30);
      var dateString = workingDate.toISOString().slice(0, 10);
      var pastPortfolio = service.generateComparablePortfolio(dateString);
      var pastVal;
      pastPortfolio.stocks.forEach(function(unit){
        if(stock.symbol() === unit.symbol()){
          pastVal = unit.currentValue();
        }
      })
      return stock.currentValue() - pastVal;
    };

    return stock;
  }

  var _addAggregateData = function(){
    var totalCost = 0;
    var totalValue = 0;
    var totalPL = 0;
    var totalOneDP = 0;
    var totalSevenDP = 0;
    var totalThirtyDP = 0;

    _portfolio.stocks.forEach(function(stock){
      totalCost += stock.costBasis();
      totalValue += stock.currentValue();
      totalPL += stock.profitLoss();
      totalOneDP += stock.oneDayPerformance();
      totalSevenDP += stock.sevenDayPerformance();
      totalThirtyDP += stock.thirtyDayPerformance();
    });

    _portfolio.costBasis = totalCost;
    _portfolio.currentValue = totalValue;
    _portfolio.profitLoss = totalPL;
    _portfolio.oneDayPerformance = totalOneDP;
    _portfolio.sevenDayPerformance = totalSevenDP;
    _portfolio.thirtyDayPerformance = totalThirtyDP;
  }

  service.generatePortfolio = function(date){
    //turn transactions into a beautiful portfolio
    var transactions = transactionService.transactionsBeforeDate(date);
    var loadedStocks = stockService.stocksGetter();
    
    //reset portfolio
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

    _addAggregateData();
    
    return _portfolio;
  };// end generate portfolio

  service.generateComparablePortfolio = function(date){
    //turn transactions into a beautiful portfolio
    var transactions = transactionService.transactionsBeforeDate(date);
    var loadedStocks = stockService.stocksGetter();
    var comparable = {};
    comparable.stocks = [];

    for(ticker in transactions){
      if(loadedStocks[ticker]){
        
        //get data for each transactions[ticker]
        var stock = _makeStock(transactions[ticker], date);        
        comparable.stocks.push(stock);
      }
      
    };
    return comparable;
  };// end generate comparable portfolio

  return service;
}]);