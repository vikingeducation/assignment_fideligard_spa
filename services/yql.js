Fideligard.factory('yqlService', ['$http', function($http) {

  var fideligardService = {};
  var _companies = ["AAPL","ABC"];

  var _quotes = [];

  var organize = function(quotes) {
    for (quote in _quotes) {

    }
  }

  var parseData = function(response) {
    var data = response.data.query.results.quote;
    for (quote in data) {
      if (_quotes[quote.symbol]) {
        _quotes[quote.symbol]
      }
    }
  };

  var urlBuilder = function(companyArray, start, end) {
    var companyString = "'" + companyArray.join("','") + "'";

    return 'http://query.yahooapis.com/v1/public/yql?q=' +
              'select * from yahoo.finance.historicaldata ' +
              'where symbol in (' + companyString + ') ' +
              'and startDate = "' + start + '" ' +
              'and endDate = "' + end + '" ' +
              '&format=json '+
              '&diagnostics=true ' +
              '&env=store://datatables.org/alltableswithkeys ' +
              '&callback=';
  };

  fideligardService.apiStocks = function() {
    var url = urlBuilder(_companies, "2015-01-01", "2015-12-31");

    return $http.get(url).then(function(response) {
      angular.copy( parseData(response), _quotes );
    }) ;
  };

  fideligardService.getStocks = function() {
    return _quotes;
  };

  fideligardService.apiStocks();

  return fideligardService;

}]);