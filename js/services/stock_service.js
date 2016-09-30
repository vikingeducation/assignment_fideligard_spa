app.factory('StockService', ['$http', function($http) {
  var StockService = {};
  var _stockData = {};
  var _symbols = [];
  var _dates = [];



  StockService.queryStocks = function() {
    return $http.get("http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22AAPL%22%20and%20startDate%20=%20%222014-01-01%22%20and%20endDate%20=%20%222014-12-31%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=")
            .then(function(response) {
              // Grab dates.
              _.forEach(
                _.uniq(
                  _.map(
                    response.data.query.results.quote,
                    function(item) {
                      return item['Date'];
                    }
                  )
                ),
                function(date) {
                  _stockData[date] = {};
                  _dates.push(date);
                }
              );
              return response;
            })
            .then(function(response) {
              // Grab symbols.
              _.forEach(
                _.uniq(
                  _.map(
                    response.data.query.results.quote,
                    function(item) {
                      return item['Symbol'];
                    }
                  )
                ),
                function(symbol) {
                  response.data.query.results.quote.forEach(function(item) {
                    // If the item's date matches the current date in collection,
                    // and if that date doesn't already have an object in
                    // the form data.
                    if (item['Symbol'] === symbol) {
                      if (_stockData[item['Date']]) {
                        if (_.isEmpty(_stockData[item['Date'][symbol]])) {
                          _stockData[item['Date']][symbol] = {};
                        }
                      }
                    }
                  });
                  return symbol;
                }
              );
              return response;
            })
            .then(function(response) {
              _.forEachRight(
                response.data.query.results.quote,
                function(item) {
                  angular.copy(item,_stockData[item['Date']][item['Symbol']]);
                }
              );
              console.log(_stockData);
              return {stockData: _stockData, dates: _dates};
            })
            .catch(function(reason) {
              console.log(reason);
            });
  };

  StockService.getStocks = function() {
    return _stockData;
  };

  StockService.getPrevious = function(current,field,symbol) {
    return function(daysAgo) {
      return function () {
        var day = new Date(current);
        var prevDay = angular.copy(day);
        prevDay.setDate(day.getDate()-daysAgo);

        // Building date strings.
        var currMonth = day.getUTCMonth() + 1;
        var currDay = day.getUTCDate();
        var currYear = day.getUTCFullYear();

        var prevMonth = prevDay.getUTCMonth() + 1;
        var previousDay = prevDay.getUTCDate();
        var prevYear = prevDay.getUTCFullYear();

        var currStr = currYear + "-" + currMonth + "-" + currDay;
        var prevStr = prevYear + "-" + prevMonth + "-" + previousDay;

        if (_stockData[currStr] && _stockData[prevStr]) {
          if (_stockData[currStr][symbol] && _stockData[prevStr][symbol]) {
            return (_stockData[currStr][symbol][field] - _stockData[prevStr][symbol][field]);
          }
        }
      };
    };
  };

  StockService.getDates = function() {
    return _dates;
  };


  // Symbol: {
  //   Year: {
  //     Days: [
  //     ]
  //   }
  //   Year: {
  //     Days: [
  //     ]
  //   }
  //   Year: {
  //     Days: [
  //     ]
  //   }
  // }

  return StockService;

}]);
