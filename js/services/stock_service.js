app.factory('StockService', ['$http', function($http) {
  var StockService = {};
  var _stockData = {};
  var _symbols = [];
  var _dates = [];



  StockService.queryStocks = function() {
    return $http.get("http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22AAPL%22%20and%20startDate%20=%20%222014-01-01%22%20and%20endDate%20=%20%222014-12-31%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=")
            .then(function(response) {
              console.log(response);
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
                  _stockData[symbol] = {};
                }
              );
              return response;
            })
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
                  response.data.query.results.quote.forEach(function(item) {
                    // If the item's date matches the current date in collection,
                    // and if that date doesn't already have an object in
                    // the form data.
                    if (item['Date'] === date) {
                      if (_stockData[item['Symbol']]) {
                        if (_.isEmpty(_stockData[item['Symbol'][date]])) {
                          _stockData[item['Symbol']][date] = {
                            days: []
                          };
                        }
                      }
                    }
                  });
                  _dates.push(date);
                  return date;
                }
              );
              return response;
            })
            .then(function(response) {
              _.forEachRight(
                response.data.query.results.quote,
                function(item) {
                  _stockData[item['Symbol']][item['Date']].days.push(item);
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

  StockService.getPrevious = function (symbol) {
    return function(year) {
      return function(daysAgo) {
        return function(current,field) {
          return function () {
            if (_stockData[symbol][year].days[current] && _stockData[symbol][year].days[current-daysAgo]) {
              return _stockData[symbol][year].days[current][field] - _stockData[symbol][year].days[current-daysAgo][field];
            }
          };
        };
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
