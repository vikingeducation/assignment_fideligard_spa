fideligard.factory('stockService', ['$http', '$q', 'dateService', function($http, $q, dateService) {
  'use strict';
  var exports = {};

  var SYMBOLS = ['AAPL', 'GOOGL', 'FB'];
  var EARLY_START_DATE = '2015-12-01'; // ensures we can get "Last 30 days" on the first day in January

  var promises = [];
  exports.stocks = {};
  exports.dates = {};

  var buildQueryString = function(symbol) {
    return "http://query.yahooapis.com/v1/public/yql?q="+
      "select * from yahoo.finance.historicaldata " +
      'where symbol    = "' + symbol + '" ' +
      'and   startDate = "' + EARLY_START_DATE + '"' +
      'and    endDate   = "2016-12-31"' +
      '&format=json' +
      '&diagnostics=true' +
      '&env=store://datatables.org/alltableswithkeys' +
      '&callback=';
  };
  (function initializeDates() {
    var current = new Date(EARLY_START_DATE);
    while (current < dateService.END_DATE) {
      exports.dates[current.toDateString()] = current;
      current = new Date(current.setDate(current.getDate() + 1));
    }
  })();

  for (var i = 0; i < SYMBOLS.length; i++) {
    promises.push(
      $http.get(buildQueryString(SYMBOLS[i]))
    );
  }

  var stock, quotes, date, dateName;
  $q.all(promises).then(function(response) {
    for (var i = 0; i < response.length; i++) {
      if (response[i].statusText === "OK") {

        quotes = response[i].data.query.results.quote;

        stock = {
          symbol: SYMBOLS[i],
          closingPrices: {}
        };
        for (var j = 0; j < quotes.length; j++) {
          stock.closingPrices[quotes[j].Date] = quotes[j].Close;
        }
        exports.stocks[stock.symbol] = stock;

        for (var k = 0; k < quotes.length; k++) {
          dateName = new Date(quotes[k].Date).toDateString();
          date = exports.dates[dateName];
          date[SYMBOLS[i]] = {
            symbol: SYMBOLS[i],
            closing: quotes[k].Close
          };
        }
      }
    }
    console.log("stocks", exports.stocks);
    console.log("dates", exports.dates);
  });

  return exports;
}]);
