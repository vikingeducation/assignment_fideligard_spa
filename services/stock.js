app.factory('stockService', ['$http',function($http) {

  
  var stub = {};

  stub.getStocks = function () {
    var url = "http://query.yahooapis.com/v1/public/yql?q=";

    var append = "select%20*%20from%20yahoo.finance.historicaldata%20" +
    "where%20symbol%20=%20AAPL%20"+
    "and%20startDate%20=%202011-09-11%20" +
    "and%20endDate%20=%202014-02-11%20" +
    "&format=json%20" +
    "&diagnostics=true%20" +
    "&env=store://datatables.org/alltableswithkeys%20" +
    "&callback="

    var finalUrl = url + append;

    $http.get(finalUrl).then( function(response) {
      console.log(response);
    })
  };

  return stub;
}]);