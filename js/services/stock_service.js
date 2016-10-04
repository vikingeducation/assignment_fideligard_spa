StockApp.factory("stockService", ["$http", '_', function($http, _){
  
  var service = {};

  //store all tickers in an object and have to them point to all their data
  var _stocks = {};

  var _stockSymbols = ['NFLIX', 'AAL', 'DISH', 'EA', 'EBAY', 'FB', 'FOX', 'INTU', 'MAR', 'CSCO'];
  
  // service.getAPPL = function(){
    
  //   return $http({
  //     method: "GET",
  //     url: '/apple_data.json'
  //   }).then(function success(response){
      
  //     //I know the ticker is apple for now

  //     var appleData = {};
  //     angular.copy(response.data, appleData);

  //     _stocks["APPL"] = appleData.query.results.quote;

  //     return appleData;
  //   }, function error(response){
  //     console.log("there was an error getting apple");
  //     return response;
  //   })
  // };

  service.findChange = function(ticker, date, daysBack){
    var pastIndex;
    var present;
    _stocks[ticker].forEach(function(day, index){
      if(day.Date === date){
        present = day;
        pastIndex = index - daysBack;
      }
    })

    var past = _stocks[ticker][pastIndex];

    var change = present.Close - past.Close;

    return change;
  };


  

  var _makeStockPromises = function(){
    var beginEP = "http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22";
    var endEP = "%22%20and%20startDate%20=%20%222014-12-01%22%20and%20endDate%20=%20%222015-12-31%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=";
    var promises = [];

    _stockSymbols.forEach(function(symbol){
      promises.push($http.get(beginEP + symbol + endEP));
    });

    return promises;
  }

  // service.allStocksByDay = function(day){
  //   console.log("RUNNINGGG  " + day);
  //   var days = [];
  //   _stockSymbols.forEach(function(symbol){
  //     var targetDay;
  //     //var targetDay = service.findDateForDay(symbol, day);
  //     console.log(typeof symbol);
  //     service.stocksGetter()[symbol].forEach(function(dataDay){
  //       var targetDay = "";
  //       if(dataDay.Date === day){
  //         targetDay = dataDay;
  //         days.push(targetDay);
  //       }
  //     })

      
  //   })

  //   return days;
  // };

  var _extendStock = function(stock){
    stock.oneDayPerformance = function(){
      var sym = stock.Symbol;
      //_stocks[sym] is correct
      var endIndex = _.indexOf(_stocks[sym], stock);

      if(endIndex > 0){
        
        var startIndex = endIndex - 1;
        var startStock = _stocks[sym][startIndex];
        var endStock = _stocks[sym][endIndex];
        start = startStock;
        fin = endStock;
        var result = _stocks[sym][endIndex].Close - _stocks[sym][startIndex].Close;

        return result;
      }
      

    },

    stock.sevenDayPerformance = function(){
      var sym = stock.Symbol;
      //_stocks[sym] is correct
      var endIndex = _.indexOf(_stocks[sym], stock);

      if(endIndex > 6){
        
        var startIndex = endIndex - 7;
        var startStock = _stocks[sym][startIndex];
        var endStock = _stocks[sym][endIndex];
        start = startStock;
        fin = endStock;
        var result = _stocks[sym][endIndex].Close - _stocks[sym][startIndex].Close;

        return result;
      }
      

    },

    stock.thirtyDayPerformance = function(){
      var sym = stock.Symbol;
      //_stocks[sym] is correct
      var endIndex = _.indexOf(_stocks[sym], stock);

      if(endIndex > 29){
        
        var startIndex = endIndex - 30;
        var startStock = _stocks[sym][startIndex];
        var endStock = _stocks[sym][endIndex];
        
        var result = endStock.Close - startStock.Close;

        return result;
      }
      

    }
  }//end extendStock

  var _extendStocks = function(stocks){
    stocks.forEach(function(stock){
      _extendStock(stock);
    })
  }

  service.getStocks = function(){
    var promises = _makeStockPromises();
    for(var i = 0; i < promises.length; i++){
      promises[i].then(function success(response){
        var data = response.data.query.results.quote;
        var symbol = data[0].Symbol;

        _stocks[symbol] = data;

        //extend stocks
        for(ticker in _stocks){
          _extendStocks(_stocks[ticker]);
          _stocks[ticker] = _stocks[ticker].reverse();
        }


        console.log("handled promise");
      }, function error(){
        console.log("there was an error handling the promise");
      });
    }
    console.log("returning");
    return _stocks;

  };


  service.findSpecificDay = function(symbol, date){
    var stocks = service.stocksGetter();
    
    var daysData = stocks[symbol];

    var targetDay;
    for(var i = 0; i < daysData.length; i++){
      if(daysData[i].Date === date){
        targetDay = daysData[i];
        return targetDay;
      }
    }
  };

  service.stocksGetter = function(){
    return _stocks;
  };

  return service;

}]);