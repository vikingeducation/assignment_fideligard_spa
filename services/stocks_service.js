fideligard.factory('StocksService', ['$http', function($http) {


  var obj = {};
  var stocks = [];


  var stockSymbols = ['LULU', 'TWTR', 'GM', 'WMT', 'F', 'NFLIX', 'AAPL', 'SNDK', 'VKTX', 'HMC', 'KO', 'PEP'];


  obj.singleStockOneYear = function(raw_data) {
    // data comes in reverse chronological order
    var backwards_data = raw_data["data"]["query"]["results"]["quote"];
    var daily_data = backwards_data.reverse();

    var results = {};
    var counter = 0;      
    var dataObject = {};  
    var previousDayData;
 
    for (var i = 1388534400000; i <= 1419984000000; i+= 86400000) {
      // check if we've run out of days
      if (daily_data[counter]) {

        var msFromData = new Date(daily_data[counter]["Date"]).getTime();

        if (Number(msFromData) == Number(i)) {
          // create an object for every single day
          dataObject['symbol'] = daily_data[0]["Symbol"]

          var close = daily_data[counter]["Close"];
          dataObject['price'] = Number(close);

          if (counter >= 1){
            dataObject['one_day'] = close - daily_data[counter - 1]["Close"];
          } else {
            dataObject['one_day'] = "N/A";
          }
          if (counter >= 7) {
            dataObject['seven_day'] = close - daily_data[counter - 7]["Close"];
          } else {
            dataObject['seven_day'] = "N/A";
          }
          if (counter >=30) {
            dataObject['thirty_day'] = close - daily_data[counter - 30]["Close"];
          } else {
            dataObject['thirty_day'] = "N/A";
          }
          results[i] = dataObject;
          previousDayData = dataObject;
          dataObject = {};
          counter++;
        } else {
          results[i] = previousDayData;
        }
      }
    }
    return results;
  };



  obj.constructStocks = function(data) {
    var singleStock = this.singleStockOneYear(data);
    stocks.push(singleStock);
    return stocks;
  }


  // returns a promise
  obj.getCall = function(stockSymbol) {
    var prefix = "http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22";
    var postfix = "%22%20and%20startDate%20=%20%222014-01-01%22%20and%20endDate%20=%20%222014-12-31%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=";

    return $http.get(prefix + stockSymbol + postfix);
  }


  // returns promises
  obj.getStocks = function() {
    var promises = [];
    for (var i = 0; i < stockSymbols.length; i++) {
      promises.push(this.getCall(stockSymbols[i]));
    }
    return promises;
  }


  return obj;

}]);
