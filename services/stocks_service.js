fideligardApp.factory('stocksService', ['$http', "$q", function($http, $q){

  var stocksService = {};
  var _selectedDate = {};
  var _stocks = [];
  var _symbols = ["MGT", "EBIO", "SPHS", "X", "SRPT", "WLL", "REN", "VRX", "CBS", "RH", "CLF", "CHK"]

  stocksService.getSelectedDate = function() {
    return _selectedDate;
  };

  stocksService.setSelectedDate = function(date) {
    angular.copy(_selectedDate, date);
  };


  var _stocks = [];

  stocksService.all = function() {

    var requests = [];
    for (var i = 0; i < _symbols.length; i++) {
      requests.push($http({
        url: "http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22" + _symbols[i] + "%22%20and%20startDate%20=%20%222014-01-01%22%20and%20endDate%20=%20%222014-12-31%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback="
      }));
    };

    return $q.all(requests).then(function(response) {
      for (var i = 0; i < response.length; i++) {
        _stocks.push(response[i].data.query.results.quote);
      }
      console.log(_stocks);
      return _stocks;
    }, function(response) {
      console.error(response);
    });
  };


  return stocksService;
}]);
