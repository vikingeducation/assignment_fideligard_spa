app.factory('StockService', ['$http', function($http) {
  var StockService = {};
  var _stockData = {};

  StockService.all = function() {
    return $http.get('js/data/stocks.json').then(function(response) {
      console.log(response.data);
      return response.data;
    });
  };

  return StockService;

}]);
