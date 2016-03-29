fideligard.factory('stockService',
  ['$http',
    function($http) {

      var _stocks = [];
      var _symbols = ['GOOG', 'AMBA', 'ABM', 'AAPL', 'PSEC', 'RAVE', 'ODFL', 'YHOO', 'IEZ', 'NE'];

      var query = (function() {
        console.log("running query");
        $http.get('http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22AAPL%22%20and%20startDate%20=%20%222015-01-01%22%20and%20endDate%20=%20%222015-12-31%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=')
          .then(
            function(response) {
              console.log(response);
            },
            function(data) {
              console.log("data");
            }
          );
        console.log("after query");
      })();

    return {
      
    };
}]);
