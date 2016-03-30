fideligard.factory('StocksService', ['apiService', function(apiService) {



  var obj = {};


  var stockSymbols = ['LULU', 'TWTR', 'GM', 'WMT', 'F', 'NFLIX', 'AAPL', 'SNDK', 'VKTX', 'HMC', 'KO', 'PEP']


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




  obj.getStocks = function() {
    var stocks = [];
    for (var i = 0; i < stockSymbols.length; i++) {
      apiService.getAll(stockSymbols[i]).then(
        function(data) {
          console.log(data["data"]["query"]["results"]["quote"])
        }, function(){
          console.log("API call failed")
        });
      // console.log(singleStockRawData)
      // var singleStock = this.singleStockOneYear(singleStockRawData);
      // stocks.push(singleStock)
      // console.log("API call for: "+ stockSymbols[i])
    }
    return stocks;
  }








  return obj;

}]);
