fideligard.factory('stockService',
  ['$http',
    function($http) {

      var _rawData = {};
      var _stocks = {};
      var _symbols = ['GOOG', 'AMBA', 'ABM', 'RAVE', 'ODFL', 'YHOO', 'IEZ', 'NE'];

      var getCompany = function(symbol) {

        $http.get('http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22' + symbol + '%22%20and%20startDate%20=%20%222015-01-01%22%20and%20endDate%20=%20%222015-12-31%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=')
        .then(
          function(response){
            _rawData[symbol] = response;
            _stocks[symbol] = _rawData[symbol].data.query.results.quote;
          },
          function(data) {
            console.log('error' + 'company name ' + symbol);
          }
        );
      };

      var getAll = (function() {
        for (var i = 0; i < _symbols.length; i++) {
          getCompany(_symbols[i]);
        }
      })();

      var getStockData = function() {
        return _stocks;
      };

      return {
        getStockData: getStockData
      };

}]);
