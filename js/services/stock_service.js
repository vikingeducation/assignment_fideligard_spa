app.factory('StockService', ['$http', function($http) {
  var StockService = {};
  var _stockData = [];

  StockService.queryStocks = function() {
    return $http.get('js/data/stocks.json')
            .then(function(response) {
              return angular.copy(response.data, _stockData);
            });
  };

  StockService.getStocks = function() {
    return _stockData;
  };

  StockService.getPrevious = function (current, daysAgo, field) {
    if (_stockData[current] && _stockData[current-daysAgo]) {
      return _stockData[current-daysAgo][field];
    }
  };

  return StockService;

}]);
