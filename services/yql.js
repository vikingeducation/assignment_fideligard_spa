Fideligard.factory('yqlService', ['$http', function($http) {

  var fideligardService = {};

  var parseData = function(response) {
    return response.data.query.results.quote;
  }

  var urlBuilder = function(companyArray, start, end) {
    var url = 'http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22AAPL%22%20and%20startDate%20=%20%222014-01-01%22%20and%20endDate%20=%20%222014-12-31%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback='
  }

  fideligardService.getStocks = function() {
    var url = 'http://query.yahooapis.com/v1/public/yql?q=' +
              'select * from yahoo.finance.historicaldata ' +
              'where symbol in ("AAPL", "ABC") ' +
              'and startDate = "2015-01-01" ' +
              'and endDate = "2015-12-31" ' +
              '&format=json '+
              '&diagnostics=true ' +
              '&env=store://datatables.org/alltableswithkeys ' +
              '&callback=';
    return $http.get(url).then(function(response) {
      return parseData(response);
    }) ;
  };

  return fideligardService;

}]);