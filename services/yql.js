Fideligard.factory('yqlService', ['$http', function($http) {

  var fideligardService = {};

  fideligardService.getStocks = function() {
    var url = 'http://query.yahooapis.com/v1/public/yql?q=' +
        'select * from   yahoo.finance.historicaldata' +
        'where  symbol in ("AAPL", "ABC")' +
        'and    startDate = "2015-01-01"' +
        'and    endDate   = "2015-12-31"' +
      '&format=json'+
      '&diagnostics=true' +
      '&env=store://datatables.org/alltableswithkeys' +
      '&callback=';

    console.log( $http(url) );
    return $http(url) ;
  };

  return fideligardService;

}]);