app.factory('StockService', ['$http', function($http) {



  StockService.all = function() {
    return $http.get('js/data/stocks.json');
  }

}]);
