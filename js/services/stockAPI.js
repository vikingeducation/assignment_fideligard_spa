fideligard.factory('stockAPI',
  ['$http', function($http) {

  var stockAPI = {};

  stockAPI.getStock = function(symbol, startDate, endDate) {
    return $http({
      method: 'GET',
      url: this.urlFor(symbol, startDate, endDate)
    });
  };


  stockAPI.urlFor = function(symbol, startDate, endDate) {
    var base = "http://query.yahooapis.com/v1/public/yql?q= select * from yahoo.finance.historicaldata where symbol = '"
    var segment1 = "' and startDate = '";
    var segment2 = "' and endDate = '";
    var closing = "' &format=json &diagnostics=true &env=store://datatables.org/alltableswithkeys &callback=";
    return base + symbol + segment1 + startDate + segment2 + endDate + closing;
  };


  /*
  http://query.yahooapis.com/v1/public/yql?q=
  select * from   yahoo.finance.historicaldata
           where  symbol    = "AAPL"
           and    startDate = "2011-09-11"
           and    endDate   = "2014-02-11"
  &format=json
  &diagnostics=true
  &env=store://datatables.org/alltableswithkeys
  &callback=
  */

  return stockAPI;

}]);