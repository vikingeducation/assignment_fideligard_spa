fideligardApp.factory('stocksService', ['$http', "$q", "dateService", function($http, $q, dateService){

  var stocksService = {};
  var _stocks = {};
  var _symbols = ["MGT", "EBIO", "SPHS", "X", "SRPT", "WLL", "REN", "VRX", "CBS", "RH", "CLF", "CHK"];
  // var _symbols = ["MGT", "EBIO", "SPHS", "X"]
  var _dates = [];

  var _selectedDate = _dates[dateService.getSelectedDate()];

  stocksService.getTimestampByDateIndex = function(dateIndex) {
    return _dates[dateIndex]
  }
  
  stocksService.getTimestampByDateObject = function(dateObj) {
      console.log("getting timestamp by date object")
      return _dates[dateObj.date]
    }

  stocksService.getStocksByTimestamp = function(timestamp) {
    return _stocks[timestamp]
  }

  var _addEntriesToStocks = function(arr){
    var stock;
    for(var i = 0; i < arr.length; i++){
      stock = arr[i];
      stock.Close = parseFloat(stock.Close);
      stock.Open = parseFloat(stock.Open);
      stock.High = parseFloat(stock.High);
      stock.Low = parseFloat(stock.Low);
      if(_stocks[stock.Date]) {
        _stocks[stock.Date][stock["Symbol"]] = stock;
      } else {
        _stocks[stock.Date] = {};
        _stocks[stock.Date][stock["Symbol"]] = stock;
      }
    }
  };

  stocksService.all = function() {
    var requests = [];
    for (var i = 0; i < _symbols.length; i++) {
      requests.push($http({
        url: "http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22" + _symbols[i] + "%22%20and%20startDate%20=%20%222014-01-01%22%20and%20endDate%20=%20%222014-12-31%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback="
      }));
    }

    return $q.all(requests)
      .then(function(response) {
        for (var i = 0; i < response.length; i++) {
          _addEntriesToStocks(response[i].data.query.results.quote);
          _dates = Object.keys(_stocks).sort()
        }
        console.log(_stocks)
        return _stocks;
      }, function(response) {
        console.error(response);
      });
  };

  stocksService.getStocks = function() {
    return _stocks;
  };

  stocksService.allDates = function() {
    return _dates;
  };

  stocksService.getDateIndexFromDate = function(date) {
    date = new Date(date).toISOString().slice(0, 10);
    for (var i = 0; i < _dates.length; i++) {
      if (_dates[i] === date) {
        return i
      }
    }
  }

  stocksService.getStocksByDateIndex = function(dateIndex) {

  }

  stocksService.getPrice = function(symbol, date) {
    console.log("getting stock price for selected date")
    var timestamp = stocksService.getTimestampByDateObject(date);
    return _stocks[timestamp][symbol]["Close"]
  }


  return stocksService;
}]);
