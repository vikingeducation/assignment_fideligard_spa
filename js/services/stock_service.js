app.factory('StockService', ['$http', function($http) {
  var StockService = {};
  var _stockData = {};
  var _symbols = [];
  var _dates = [];

  var YQL_QUERY = "http://query.yahooapis.com/v1/public/yql?q=\
        select * from   yahoo.finance.historicaldata\
                 where  symbol    in (\"AAPL\", \"GOOGL\", \"TWTR\")\
                 and    startDate = \"2011-09-11\"\
                 and    endDate   = \"2014-02-11\"\
        &format=json\
        &diagnostics=true\
        &env=store://datatables.org/alltableswithkeys\
        &callback=";

  StockService.queryStocks = function() {
    return $http.get(YQL_QUERY)
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

  return StockService;

}]);
