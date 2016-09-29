fideligardApp.factory('stocksService', ['$http', function($http){

  var stocksService = {};
  var _selectedDate = {};
  var _stocks = [];

  stocksService.getSelectedDate = function() {
    return _selectedDate;
  };

  stocksService.setSelectedDate = function(date) {
    angular.copy(_selectedDate, date);
  };

  stocksService.all = function() {
    return $http({
      url: '/data/aapl.json',
      method: 'GET'
    }).then(function(response){
      angular.copy(response.data.query.results.quote, _stocks);
      return _stocks;
    });
  };

  return stocksService;
}]);
